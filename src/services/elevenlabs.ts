// OpenAI Text-to-Speech Service

import holdMusicFile from '../assets/lounge-jazz-elevator-music-324902.mp3';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/audio/speech';

// OpenAI TTS Voices: alloy, echo, fable, onyx, nova, shimmer
export const VOICE_CONFIG = {
  'IVR System': {
    voice: 'onyx',    // Deep, authoritative
    speed: 1.25,       // Faster IVR
  },
  'FRM Agent': {
    voice: 'nova',    // Warm, professional female
    speed: 1.25,       // Fast, efficient AI
  },
  'Payer Rep': {
    voice: 'fable',   // Expressive, warm British accent - more human
    speed: 1.0,       // Normal speed for natural conversation
  },
} as const;

// Audio cache for pre-fetched audio
const audioCache = new Map<string, HTMLAudioElement>();
const pendingFetches = new Map<string, Promise<HTMLAudioElement | null>>();

// Generate cache key
function getCacheKey(text: string, speaker: string): string {
  return `${speaker}:${text}`;
}

// Audio queue for sequential playback
class AudioQueue {
  private queue: Array<{ audio: HTMLAudioElement; resolve: () => void }> = [];
  private isPlaying = false;
  private currentAudio: HTMLAudioElement | null = null;
  private isMuted = false;

  async add(audio: HTMLAudioElement): Promise<void> {
    return new Promise((resolve) => {
      this.queue.push({ audio, resolve });
      this.processQueue();
    });
  }

  private async processQueue(): Promise<void> {
    if (this.isPlaying || this.queue.length === 0) return;

    this.isPlaying = true;
    const item = this.queue.shift();

    if (item) {
      this.currentAudio = item.audio;

      if (this.isMuted) {
        item.audio.muted = true;
      }

      try {
        await item.audio.play();

        await new Promise<void>((resolve) => {
          item.audio.onended = () => resolve();
          item.audio.onerror = () => resolve();
        });
      } catch (error) {
        console.error('Audio playback error:', error);
      }

      item.resolve();
      this.currentAudio = null;
    }

    this.isPlaying = false;
    this.processQueue();
  }

  setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.currentAudio) {
      this.currentAudio.muted = muted;
    }
  }

  stop(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    this.queue = [];
    this.isPlaying = false;
  }

  clear(): void {
    this.queue = [];
  }
}

// Singleton audio queue
export const audioQueue = new AudioQueue();

// Get voice config based on speaker name
function getVoiceConfig(speaker: string) {
  if (speaker.includes('Payer Rep')) {
    return VOICE_CONFIG['Payer Rep'];
  }
  return VOICE_CONFIG[speaker as keyof typeof VOICE_CONFIG] || VOICE_CONFIG['FRM Agent'];
}

// Fetch audio from API (used for both pre-fetch and speak)
async function fetchAudio(text: string, speaker: string): Promise<HTMLAudioElement | null> {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    return null;
  }

  const config = getVoiceConfig(speaker);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: text,
        voice: config.voice,
        speed: config.speed,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI TTS API error:', response.status);
      return null;
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    // Clean up URL after audio ends
    audio.onended = () => URL.revokeObjectURL(audioUrl);
    audio.onerror = () => URL.revokeObjectURL(audioUrl);

    return audio;
  } catch (error) {
    console.error('OpenAI TTS request failed:', error);
    return null;
  }
}

// Pre-fetch audio for upcoming messages
export async function prefetchAudio(text: string, speaker: string): Promise<void> {
  const cacheKey = getCacheKey(text, speaker);

  // Already cached or being fetched
  if (audioCache.has(cacheKey) || pendingFetches.has(cacheKey)) {
    return;
  }

  // Start fetching
  const fetchPromise = fetchAudio(text, speaker);
  pendingFetches.set(cacheKey, fetchPromise);

  const audio = await fetchPromise;
  pendingFetches.delete(cacheKey);

  if (audio) {
    audioCache.set(cacheKey, audio);
    console.log(`[TTS] Pre-fetched: ${speaker} - ${text.substring(0, 30)}...`);
  }
}

// Main function to speak text using OpenAI TTS
export async function speakWithElevenLabs(
  text: string,
  speaker: string
): Promise<void> {
  console.log(`[TTS] Speaking as ${speaker}:`, text.substring(0, 50) + '...');

  const cacheKey = getCacheKey(text, speaker);

  // Check if audio is already cached
  if (audioCache.has(cacheKey)) {
    const cachedAudio = audioCache.get(cacheKey)!;
    audioCache.delete(cacheKey); // Remove from cache after use
    await audioQueue.add(cachedAudio);
    return;
  }

  // Check if audio is being fetched
  if (pendingFetches.has(cacheKey)) {
    const audio = await pendingFetches.get(cacheKey);
    if (audio) {
      audioCache.delete(cacheKey);
      await audioQueue.add(audio);
      return;
    }
  }

  // No cache, fetch now
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    console.warn('OpenAI API key not configured. Falling back to browser speech.');
    fallbackToWebSpeech(text, speaker);
    return;
  }

  const audio = await fetchAudio(text, speaker);
  if (audio) {
    await audioQueue.add(audio);
  } else {
    fallbackToWebSpeech(text, speaker);
  }
}

// Fallback to Web Speech API if OpenAI fails
function fallbackToWebSpeech(text: string, speaker: string): void {
  if (!window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();

  // Configure voice based on speaker
  if (speaker === 'IVR System') {
    utterance.rate = 0.85;
    utterance.pitch = 0.7;
  } else if (speaker === 'FRM Agent') {
    utterance.rate = 1.1;
    utterance.pitch = 1.1;
  } else if (speaker.includes('Payer Rep')) {
    utterance.rate = 1.0;
    utterance.pitch = 0.9;
  }

  // Try to find a suitable voice
  const femaleVoice = voices.find(v => v.name.toLowerCase().includes('samantha'));
  const maleVoice = voices.find(v => v.name.toLowerCase().includes('daniel'));

  if (speaker === 'FRM Agent') {
    utterance.voice = femaleVoice || voices[0];
  } else {
    utterance.voice = maleVoice || voices[0];
  }

  speechSynthesis.speak(utterance);
}

// Stop all audio
export function stopAllAudio(): void {
  audioQueue.stop();
  if (window.speechSynthesis) {
    speechSynthesis.cancel();
  }
}

// Set mute state
export function setAudioMuted(muted: boolean): void {
  audioQueue.setMuted(muted);
  if (muted && window.speechSynthesis) {
    speechSynthesis.cancel();
  }
}

// Clear pending audio queue
export function clearAudioQueue(): void {
  audioQueue.clear();
}

// Clear audio cache
export function clearAudioCache(): void {
  audioCache.clear();
  pendingFetches.clear();
}

// Hold music player
let holdMusicAudio: HTMLAudioElement | null = null;
let isHoldMusicPlaying = false;

export function playHoldMusic(): void {
  // Don't restart if already playing
  if (isHoldMusicPlaying && holdMusicAudio) {
    return;
  }

  // Lounge jazz elevator hold music
  holdMusicAudio = new Audio(holdMusicFile);
  holdMusicAudio.loop = true;
  holdMusicAudio.volume = 0.3; // 30% volume
  holdMusicAudio.play()
    .then(() => {
      isHoldMusicPlaying = true;
    })
    .catch(err => console.log('Hold music autoplay blocked:', err));
}

export function stopHoldMusic(): void {
  if (holdMusicAudio) {
    holdMusicAudio.pause();
    holdMusicAudio.currentTime = 0;
    holdMusicAudio = null;
  }
  isHoldMusicPlaying = false;
}
