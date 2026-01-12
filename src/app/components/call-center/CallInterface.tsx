import { useState, useEffect, useRef } from 'react';
import svgPaths from "../../../imports/svg-ugb3xc3e9n";
import { speakWithElevenLabs, stopAllAudio, setAudioMuted, clearAudioQueue, prefetchAudio, playHoldMusic, stopHoldMusic } from '../../../services/elevenlabs';

interface TranscriptMessage {
  time: string;
  speaker: string;
  message: string;
  isAgent?: boolean;
  isStatus?: boolean;
  requiresJoin?: boolean;
}

const transcript: TranscriptMessage[] = [
  {
    time: '00:00',
    speaker: 'Status',
    message: 'FRM Agent initiated outbound call',
    isStatus: true
  },
  {
    time: '00:02',
    speaker: 'Status',
    message: 'IVR System answered',
    isStatus: true
  },
  {
    time: '00:02',
    speaker: 'IVR System',
    message: 'Thank you for calling United Healthcare Specialty Pharmacy Services. Para español, oprima el dos. For your security, this call may be monitored or recorded. Please listen carefully as our menu options have changed. If you are a patient calling about a prescription, press 1. If you are a healthcare provider, press 2. For all other inquiries, press 3.'
  },
  {
    time: '00:22',
    speaker: 'FRM Agent',
    message: '2'
  },
  {
    time: '00:23',
    speaker: 'IVR System',
    message: 'You have reached the healthcare provider line.'
  },
  {
    time: '00:27',
    speaker: 'IVR System',
    message: 'If you are calling to submit a new prior authorization, press 1. If you are calling to check the status of an existing prior authorization, press 2. For pharmacy network questions, press 3. To speak with a representative, press 0.'
  },
  {
    time: '00:40',
    speaker: 'FRM Agent',
    message: '2'
  },
  {
    time: '00:41',
    speaker: 'IVR System',
    message: 'To help us locate your prior authorization, please enter the patient\'s member ID number followed by the pound key. You can find this on the patient\'s insurance card.'
  },
  {
    time: '00:50',
    speaker: 'FRM Agent',
    message: '9-8-7-6-5-4-3-2-1'
  },
  {
    time: '00:52',
    speaker: 'IVR System',
    message: 'You entered 9-8-7-6-5-4-3-2-1. If this is correct, press 1. To re-enter, press 2.'
  },
  {
    time: '00:58',
    speaker: 'FRM Agent',
    message: '1'
  },
  {
    time: '00:59',
    speaker: 'IVR System',
    message: 'Thank you. Please hold while we connect you to a representative.'
  },
  {
    time: '01:03',
    speaker: 'Status',
    message: 'Hold music playing...',
    isStatus: true
  },
  {
    time: '02:30',
    speaker: 'Status',
    message: 'Payer Rep joined the call',
    isStatus: true
  },
  {
    time: '02:30',
    speaker: 'Payer Rep',
    message: 'Thank you for holding. This is James Wilson with United Healthcare Specialty Pharmacy Services. May I have your name and your relationship to the patient?'
  },
  {
    time: '02:40',
    speaker: 'FRM Agent',
    message: 'Yes, hi James. I am the automated assistant at Phluence. I\'m calling on the request of Dr. Sarah Chen\'s office. Dr. Chen is the prescribing physician.'
  },
  {
    time: '02:50',
    speaker: 'Payer Rep : James Wilson',
    message: 'Thank you. Can you confirm the patient\'s name and date of birth for verification purposes?'
  },
  {
    time: '02:57',
    speaker: 'FRM Agent',
    message: 'Yes, the patient\'s name is Robert Thompson, date of birth March 15, 1968.'
  },
  {
    time: '03:05',
    speaker: 'Payer Rep : James Wilson',
    message: 'Perfect, thank you. I have the patient\'s record pulled up here. And for security purposes, can you confirm the last four digits of the patient\'s member ID?'
  },
  {
    time: '03:15',
    speaker: 'FRM Agent',
    message: 'Yes, that\'s 4-3-2-1.'
  },
  {
    time: '03:18',
    speaker: 'Payer Rep : James Wilson',
    message: 'Great, thank you. How can I help you today?'
  },
  {
    time: '03:23',
    speaker: 'FRM Agent',
    message: 'We submitted a prior authorization request for Mr. Thompson about a week and a half ago, and we\'re calling to check on the status. The medication is for a specialty biologic.'
  },
  {
    time: '03:35',
    speaker: 'Payer Rep : James Wilson',
    message: 'Absolutely, let me pull up the prior authorization details. Can you tell me what medication this is for?'
  },
  {
    time: '03:43',
    speaker: 'FRM Agent',
    message: 'It\'s for Humira, 40 milligrams, subcutaneous injection.'
  },
  {
    time: '03:50',
    speaker: 'Payer Rep : James Wilson',
    message: 'Got it. Let me search our system here... Okay, I see the prior authorization request. It was submitted on December 23rd, 2025. Is that the one you\'re inquiring about?'
  },
  {
    time: '04:05',
    speaker: 'FRM Agent',
    message: 'Yes, that\'s correct.'
  },
  {
    time: '04:08',
    speaker: 'Payer Rep : James Wilson',
    message: 'Excellent. Good news – I can see that this prior authorization has been approved.'
  },
  {
    time: '04:15',
    speaker: 'Payer Rep : James Wilson',
    message: 'The prior authorization approval number is PA-2025-UHC-887452.'
  },
  {
    time: '04:23',
    speaker: 'FRM Agent',
    message: 'Okay, let me write that down. PA-2025-UHC-887452. Got it.'
  },
  {
    time: '04:32',
    speaker: 'Payer Rep : James Wilson',
    message: 'Correct. The approval date is December 30th, 2025.'
  },
  {
    time: '04:38',
    speaker: 'FRM Agent',
    message: 'December 30th, 2025.'
  },
  {
    time: '04:42',
    speaker: 'Payer Rep : James Wilson',
    message: 'And the authorization is valid through December 29th, 2026, so you have a full year from the approval date.'
  },
  {
    time: '04:52',
    speaker: 'FRM Agent',
    message: 'Perfect. So that\'s an expiration date of December 29th, 2026?'
  },
  {
    time: '04:58',
    speaker: 'Payer Rep : James Wilson',
    message: 'That\'s correct.'
  },
  {
    time: '05:01',
    speaker: 'FRM Agent',
    message: 'And this covers the Humira 40 milligram injections?'
  },
  {
    time: '05:06',
    speaker: 'Payer Rep : James Wilson',
    message: 'Yes, the authorization is for Humira 40 milligrams subcutaneous injection. It\'s approved for a quantity of 4 syringes per 28 days, which aligns with the typical dosing schedule.'
  },
  {
    time: '05:22',
    speaker: 'FRM Agent',
    message: 'Excellent. Is there anything specific the patient needs to do, or can we just send the prescription to the specialty pharmacy?'
  },
  {
    time: '05:32',
    speaker: 'Payer Rep : James Wilson',
    message: 'You can send the prescription directly to our contracted specialty pharmacy. The patient is set up with Accredo Specialty Pharmacy. The prescription should reference the prior authorization number I provided. They\'ll also need to contact the specialty pharmacy to set up delivery.'
  },
  {
    time: '05:50',
    speaker: 'FRM Agent',
    message: 'Perfect. And the number for Accredo?'
  },
  {
    time: '05:54',
    speaker: 'Payer Rep : James Wilson',
    message: 'The specialty pharmacy can be reached at 1-800-803-2523. The patient can also manage their prescription online at Accredo.com.'
  },
  {
    time: '06:06',
    speaker: 'FRM Agent',
    message: 'Great. Is there anything else we need to know?'
  },
  {
    time: '06:10',
    speaker: 'Payer Rep : James Wilson',
    message: 'Just to confirm – the prior authorization is specifically for the diagnosis code that was submitted, which is rheumatoid arthritis. If the medication is being used for a different indication, a new prior authorization would be required.'
  },
  {
    time: '06:26',
    speaker: 'FRM Agent',
    message: 'Understood. It is for rheumatoid arthritis, so we should be all set.'
  },
  {
    time: '06:32',
    speaker: 'Payer Rep : James Wilson',
    message: 'Perfect. Is there anything else I can help you with today?'
  },
  {
    time: '06:38',
    speaker: 'FRM Agent',
    message: 'No, I think that covers everything. Thank you so much for your help, James.'
  },
  {
    time: '06:45',
    speaker: 'Payer Rep : James Wilson',
    message: 'You\'re very welcome. Just to recap, your prior authorization number is PA-2025-UHC-887452, approved on December 30th, 2025, valid through December 29th, 2026. Have a great day!'
  },
  {
    time: '07:00',
    speaker: 'FRM Agent',
    message: 'You too, thank you!'
  },
  {
    time: '07:03',
    speaker: 'Payer Rep : James Wilson',
    message: 'Goodbye.'
  },
  {
    time: '07:05',
    speaker: 'Status',
    message: 'Call ended',
    isStatus: true
  },
];

export function CallInterface() {
  const [isRecording, setIsRecording] = useState(false); // Start paused
  const [callElapsedSeconds, setCallElapsedSeconds] = useState(0);
  const [typingProgress, setTypingProgress] = useState<{ messageIndex: number; charIndex: number } | null>(null);
  const [natalieJoined, setNatalieJoined] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const transcriptEndRef = useRef<HTMLDivElement>(null);
  const lastSpokenMessageIndex = useRef(-1);

  // Parse time string (MM:SS) to seconds
  const parseTime = (timeStr: string): number => {
    const [mins, secs] = timeStr.split(':').map(Number);
    return mins * 60 + secs;
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      stopAllAudio();
      stopHoldMusic();
    };
  }, []);

  // Pre-fetch first messages and start call after delay
  useEffect(() => {
    const firstMessages = transcript
      .filter(msg => !msg.isStatus && !/^[0-9#*-]{1,20}$/.test(msg.message))
      .slice(0, 5);

    firstMessages.forEach(msg => {
      prefetchAudio(msg.message, msg.speaker);
    });

    // Start call after 2 seconds to allow pre-fetch
    const startTimer = setTimeout(() => {
      setIsRecording(true);
    }, 2000);

    return () => clearTimeout(startTimer);
  }, []);

  // Play/stop hold music based on call state
  useEffect(() => {
    const holdMusicStart = parseTime('01:03'); // When "Hold music playing..." appears
    const holdMusicEnd = parseTime('02:30');   // When "Payer Rep joined" appears

    if (callElapsedSeconds >= holdMusicStart && callElapsedSeconds < holdMusicEnd && isRecording) {
      playHoldMusic();
    } else {
      stopHoldMusic();
    }
  }, [callElapsedSeconds, isRecording]);

  // Spacebar to skip to next message
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.repeat) {
        e.preventDefault();
        // Stop current audio
        stopAllAudio();

        // Find next message time and jump to it
        setCallElapsedSeconds(currentTime => {
          const nextMessage = transcript.find(msg => parseTime(msg.time) > currentTime);
          if (nextMessage) {
            return parseTime(nextMessage.time);
          }
          return currentTime;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


  // Filter messages that should be visible based on elapsed time
  const visibleMessages = transcript.filter(msg => parseTime(msg.time) <= callElapsedSeconds);

  // Track which speakers have appeared
  const speakersAppeared = new Set(visibleMessages.map(msg => {
    if (msg.speaker.includes('Payer Rep')) return 'Payer Rep';
    return msg.speaker;
  }));

  // Get current speaker (most recent message)
  const currentSpeaker = visibleMessages.length > 0 
    ? visibleMessages[visibleMessages.length - 1].speaker.includes('Payer Rep')
      ? 'Payer Rep'
      : visibleMessages[visibleMessages.length - 1].speaker
    : null;

  // Typing animation effect
  useEffect(() => {
    if (visibleMessages.length === 0) return;

    // Don't continue typing if paused
    if (!isRecording) return;

    const lastMessageIndex = visibleMessages.length - 1;
    const lastMessage = visibleMessages[lastMessageIndex];
    const fullText = lastMessage.message;

    // If we don't have typing progress or we're on a new message, start typing
    if (!typingProgress || typingProgress.messageIndex !== lastMessageIndex) {
      setTypingProgress({ messageIndex: lastMessageIndex, charIndex: 0 });
      return;
    }

    // If we've finished typing this message, don't continue
    if (typingProgress.charIndex >= fullText.length) {
      return;
    }

    // Variable typing speed based on speaker to match voice characteristics
    // Formula: typingSpeed = baseSpeed / voiceRate (to sync with actual speech)
    let typingSpeed = 25; // Default: ~40 characters per second (rate 1.0)

    if (lastMessage.speaker === 'IVR System') {
      typingSpeed = 35; // Slower for robotic IVR (25ms / 0.85 = 29.4ms, rounded up for better sync)
    } else if (lastMessage.speaker === 'FRM Agent') {
      typingSpeed = 20; // Faster for efficient AI agent (25ms / 1.25 = 20ms)
    } else if (lastMessage.speaker.includes('Payer Rep')) {
      typingSpeed = 27; // Slightly slower, professional (25ms / 0.92 = 27.2ms)
    }

    const timer = setTimeout(() => {
      setTypingProgress(prev => {
        if (!prev) return null;
        return {
          messageIndex: prev.messageIndex,
          charIndex: Math.min(prev.charIndex + 1, fullText.length)
        };
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [visibleMessages.length, typingProgress, isRecording]);

  // Auto-scroll to bottom when new messages appear (only if there are multiple messages)
  useEffect(() => {
    if (visibleMessages.length > 3) {
      transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [visibleMessages.length]); // Only scroll when number of visible messages changes

  useEffect(() => {
    if (!isRecording) return;

    const interval = setInterval(() => {
      setCallElapsedSeconds(s => {
        // Stop at 11:28 (688 seconds)
        if (s >= parseTime('07:05')) {
          setIsRecording(false);
          return s;
        }

        // Normal speed: 0 to 63 seconds (00:00 to 01:03 - before hold)
        if (s < 63) {
          return s + 1;
        }
        // Fast speed during hold: 63 to 150 seconds (01:03 to 02:30) - skip hold
        else if (s < 150) {
          return s + 10; // 10x speed to get through the hold time quickly
        }
        // Normal speed: after 150 seconds (02:30 onwards) - the actual conversation
        else {
          return s + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Function to speak a message using ElevenLabs
  const speakMessage = async (message: string, speaker: string, index: number) => {
    if (isMuted) return;
    if (lastSpokenMessageIndex.current >= index) return; // Avoid repeating messages

    lastSpokenMessageIndex.current = index;

    try {
      await speakWithElevenLabs(message, speaker);
    } catch (error) {
      console.error('Speech error:', error);
    }
  };

  // Pre-fetch upcoming audio messages
  useEffect(() => {
    // Find next 3 messages that haven't appeared yet
    const upcomingMessages = transcript
      .filter(msg => {
        const msgTime = parseTime(msg.time);
        const isUpcoming = msgTime > callElapsedSeconds && msgTime <= callElapsedSeconds + 60; // Next 60 seconds
        const isSingleButtonPress = /^[0-9#*]{1,2}$/.test(msg.message);
        return isUpcoming && !msg.isStatus && !isSingleButtonPress;
      })
      .slice(0, 3);

    // Pre-fetch each upcoming message
    upcomingMessages.forEach(msg => {
      prefetchAudio(msg.message, msg.speaker);
    });
  }, [callElapsedSeconds]);

  // Trigger speech when new messages appear
  useEffect(() => {
    if (visibleMessages.length === 0) return;

    const lastMessageIndex = visibleMessages.length - 1;
    const lastMessage = visibleMessages[lastMessageIndex];

    // Don't speak status messages
    if (lastMessage.isStatus) return;

    // Skip only single digit button presses like "1", "2"
    const isSingleButtonPress = /^[0-9#*]{1,2}$/.test(lastMessage.message);

    // Speak the message if it's new and not a single button press
    if (lastMessageIndex > lastSpokenMessageIndex.current && !isSingleButtonPress) {
      speakMessage(lastMessage.message, lastMessage.speaker, lastMessageIndex);
    }
  }, [visibleMessages.length, isMuted]);

  // Stop speaking when the call ends
  useEffect(() => {
    if (callElapsedSeconds >= parseTime('07:05')) {
      stopAllAudio();
    }
  }, [callElapsedSeconds]);

  // Handle mute toggle
  useEffect(() => {
    setAudioMuted(isMuted);
  }, [isMuted]);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-full items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <div className="absolute border-[#f5f5f5] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      
      {/* Header with logo and controls */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[8px] relative w-full">
            {/* Logo and status */}
            <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="bg-[#253382] relative rounded-[200px] shrink-0 size-[32px]">
                <div className="absolute inset-[12.5%_28.6%_12.5%_28.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8495 24">
                    <g>
                      <path d={svgPaths.p393295f0} fill="white" />
                      <path d={svgPaths.p2adb7900} fill="white" />
                      <path d={svgPaths.p3c95b980} fill="white" />
                      <path d={svgPaths.p1e774100} fill="white" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#414651] text-[13px] w-full">
                  United Healthcare
                </p>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-[180deg]">
                      <div className="relative size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1f072800} stroke="#079455" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#717680] text-[12px] text-nowrap">
                      Ongoing call
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="content-stretch flex items-center gap-[12px] relative shrink-0">
              {/* User dropdown */}
              <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0">
                <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0">
                  <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[8px] py-[3px] relative rounded-[inherit]">
                    <div className="relative shrink-0 size-[14px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p14e98a00} stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                    <div className="relative shrink-0 size-[14px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#535862" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-[-1px] pointer-events-none rounded-[7px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                </div>
              </div>

              {/* Dots menu */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="bg-white relative rounded-[6px] shrink-0">
                  <div className="content-stretch flex items-center justify-center overflow-clip p-[5px] relative rounded-[inherit]">
                    <div className="relative shrink-0 size-[14px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p173d3600} stroke="#414651" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.pe2f300} stroke="#414651" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p318aea00} stroke="#414651" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                </div>
              </div>

              {/* Expand */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="bg-white relative rounded-[6px] shrink-0">
                  <div className="content-stretch flex items-center justify-center overflow-clip p-[5px] relative rounded-[inherit]">
                    <div className="relative shrink-0 size-[14px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p151ddd80} stroke="#414651" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker Tags */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] py-[12px] relative w-full">
            {/* Responsive grid layout for speaker tags */}
            <div className="w-full grid gap-[12px] grid-cols-2">
              {/* IVR System Tag - only show if Payer Rep hasn't joined yet */}
              {speakersAppeared.has('IVR System') && !speakersAppeared.has('Payer Rep') && (
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="basis-0 bg-gradient-to-b from-[rgba(37,51,130,0.05)] grow min-h-px min-w-px relative rounded-[8px] shrink-0 to-[105.68%] to-[rgba(37,51,130,0.2)]">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                          <div className={`relative shrink-0 size-[20px] ${currentSpeaker === 'IVR System' ? 'speaking-pulse' : ''}`}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="#253382" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p29061a80} fill="#253382" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="#253382" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="#253382" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="#253382" fillRule="evenodd" />
                            </svg>
                          </div>
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[13px] text-nowrap">
                            IVR System
                          </p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#253382] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              )}

              {/* FRM Agent Tag - always show from the start */}
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="basis-0 bg-gradient-to-b from-[rgba(194,43,110,0.05)] grow min-h-px min-w-px relative rounded-[8px] shrink-0 to-[105.68%] to-[rgba(194,43,110,0.1)]">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                        <div className={`relative shrink-0 size-[20px] ${currentSpeaker === 'FRM Agent' ? 'speaking-pulse' : ''}`}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="#871B4C" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p29061a80} fill="#871B4C" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="#871B4C" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="#871B4C" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="#871B4C" fillRule="evenodd" />
                          </svg>
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[13px] text-nowrap">
                          FRM Agent
                        </p>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#871b4c] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>

              {/* Natalie Green Tag - only show when she joins */}
              {natalieJoined && (
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="basis-0 bg-gradient-to-b from-[rgba(194,43,110,0.05)] grow min-h-px min-w-px relative rounded-[8px] shrink-0 to-[105.68%] to-[rgba(194,43,110,0.1)]">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                          <div className={`relative shrink-0 size-[20px] ${currentSpeaker === 'Natalie Green' ? 'speaking-pulse' : ''}`}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="#871B4C" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p29061a80} fill="#871B4C" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="#871B4C" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="#871B4C" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="#871B4C" fillRule="evenodd" />
                            </svg>
                          </div>
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#871b4c] text-[13px] text-nowrap">
                            Natalie Green
                          </p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#871b4c] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              )}

              {/* Payer Rep Tag - show when they join */}
              {speakersAppeared.has('Payer Rep') && (
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="basis-0 bg-gradient-to-b from-[rgba(37,51,130,0.05)] grow min-h-px min-w-px relative rounded-[8px] shrink-0 to-[105.68%] to-[rgba(37,51,130,0.2)]">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                          <div className={`relative shrink-0 size-[20px] ${currentSpeaker === 'Payer Rep' ? 'speaking-pulse' : ''}`}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p12c42a00} fill="#253382" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p29061a80} fill="#253382" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p1e24e100} fill="#253382" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p3c3a5500} fill="#253382" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p174c9f00} fill="#253382" fillRule="evenodd" />
                            </svg>
                          </div>
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#253382] text-[13px] text-nowrap">
                            Payer Rep
                          </p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#253382] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              )}
            </div>
            
            {/* Join Call Button - show when request is made */}
            {visibleMessages.some(msg => msg.requiresJoin) && !natalieJoined && (
              <div className="w-full px-0 py-[8px]">
                <button 
                  onClick={() => setNatalieJoined(true)}
                  className="content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative w-full bg-[#079455] rounded-[6px] hover:bg-[#067a47] transition-colors cursor-pointer"
                >
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d="M6 6V4.33333C6 3.27867 6.852 2.46667 7.942 2.46667C9.012 2.46667 9.87067 3.29867 9.87067 4.33333V6M3.33333 6H12.6667C13.2189 6 13.6667 6.44772 13.6667 7V12.6667C13.6667 13.219 13.2189 13.6667 12.6667 13.6667H3.33333C2.78105 13.6667 2.33333 13.219 2.33333 12.6667V7C2.33333 6.44772 2.78105 6 3.33333 6Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-white text-[13px]">
                    Join Call as Natalie Green
                  </p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white content-stretch flex flex-col items-start pb-[12px] pt-0 px-0 relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <div className="backdrop-blur-[9.363px] backdrop-filter basis-0 bg-[#0a0d12] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative w-full">
                    {/* Timer */}
                    <div className="basis-0 content-stretch flex gap-[9.363px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPaths.pfeeb300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                      </div>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-nowrap text-white">
                        {formatTime(callElapsedSeconds)}
                      </p>
                    </div>

                    {/* End Call Button / Call Ended Status */}
                    {callElapsedSeconds >= parseTime('07:05') ? (
                      <div className="flex gap-[8px] items-center">
                        {/* Replay Button */}
                        <button
                          onClick={() => {
                            stopAllAudio();
                            clearAudioQueue();
                            lastSpokenMessageIndex.current = -1;
                            setCallElapsedSeconds(0);
                            setIsRecording(true);
                            setNatalieJoined(false);
                            setTypingProgress(null);
                          }}
                          className="bg-[#079455] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#067a47] transition-colors"
                        >
                          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[3px] relative rounded-[inherit]">
                            <div className="relative shrink-0 size-[14px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                <path d="M1.16667 7C1.16667 7 2.91667 3.5 7 3.5C11.0833 3.5 12.8333 7 12.8333 7C12.8333 7 11.0833 10.5 7 10.5C2.91667 10.5 1.16667 7 1.16667 7Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              </svg>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
                                Replay call
                              </p>
                            </div>
                          </div>
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                        </button>
                        
                        {/* Call Ended Badge */}
                        <div className="bg-[#535862] relative rounded-[6px] shrink-0">
                          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[3px] relative rounded-[inherit]">
                            <div className="relative shrink-0 size-[14px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                <path d="M11.6667 3.5L5.25001 9.91667L2.33334 7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                              </svg>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
                                Call ended
                              </p>
                            </div>
                          </div>
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#d92d20] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#b42318] transition-colors">
                        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[3px] relative rounded-[inherit]">
                          <div className="relative shrink-0 size-[14px]">
                            <div className="absolute inset-[0_-14.29%_-14.29%_0]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.pf6a6f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              </svg>
                            </div>
                          </div>
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
                              End call
                            </p>
                          </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                      </div>
                    )}

                    {/* Middle Controls (positioned absolute) - hide when call ended */}
                    {callElapsedSeconds < parseTime('07:05') && (
                      <div className="absolute content-stretch flex gap-[4px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                        {/* CC Button */}
                        <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0">
                          <div className="relative shrink-0 size-[14px]">
                            <div className="absolute border-[1.17px] border-solid border-white inset-[7.14%_-7.14%] rounded-[2px]" />
                            <p className="absolute bottom-[21.43%] font-['SF_Compact_Rounded:Semibold',sans-serif] leading-[9px] left-[21.43%] not-italic right-1/2 text-[6px] text-nowrap text-white top-[14.29%]">
                              C
                            </p>
                          </div>
                        </div>

                        {/* Microphone Controls */}
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div className="content-stretch flex gap-px items-center relative shrink-0">
                            <div className="content-stretch flex gap-[6px] h-[24px] items-center justify-center overflow-clip p-[5px] relative rounded-[6px] shrink-0">
                              <div className="relative shrink-0 size-[14px]">
                                <div className="absolute inset-[0_-14.29%_-14.29%_0]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                    <path d={svgPaths.p148c3c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[6px] h-[24px] items-center justify-center overflow-clip px-0 py-[5px] relative rounded-[4px] shrink-0">
                              <div className="relative shrink-0 size-[12px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                  <path d="M3 4.5L6 7.5L9 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pause/Play Button */}
                        <button
                          onClick={() => {
                            if (isRecording) {
                              // Pausing - stop audio
                              stopAllAudio();
                              setIsRecording(false);
                            } else {
                              // Resuming - restart voice for current message
                              setIsRecording(true);
                              // Find current message and re-speak it
                              const currentMessage = visibleMessages[visibleMessages.length - 1];
                              if (currentMessage && !currentMessage.isStatus) {
                                const isSingleButtonPress = /^[0-9#*]{1,2}$/.test(currentMessage.message);
                                if (!isSingleButtonPress) {
                                  speakWithElevenLabs(currentMessage.message, currentMessage.speaker);
                                }
                              }
                            }
                          }}
                          className="content-stretch flex items-center justify-center overflow-clip p-[5px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-white/20 transition-colors"
                        >
                          <div className="relative shrink-0 size-[14px]">
                            <div className="absolute inset-[0_-14.29%_-14.29%_0]">
                              {isRecording ? (
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <path d={svgPaths.p4bd1900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </svg>
                              ) : (
                                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                                  <path d="M4 3L13 8L4 13V3Z" fill="white" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transcript Header */}
      <div className="bg-white content-stretch flex flex-col items-start px-0 py-[4px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[1px_0px] border-solid inset-0 pointer-events-none" />
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[18.725px] py-0 relative w-full">
              <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#414651] text-[13px] w-full">
                    Transcript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transcript Content */}
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px px-[18.725px] py-0 relative shrink-0 w-full overflow-y-auto">{/* Phone rings */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex items-start px-0 py-0 relative w-full">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[13px] text-center text-nowrap">
              Phone rings
            </p>
          </div>
        </div>

        {/* Transcript Messages */}
        {visibleMessages.map((msg, index) => {
          const isCurrentlyTyping = typingProgress?.messageIndex === index && !msg.isStatus;
          const displayedText = isCurrentlyTyping && typingProgress 
            ? msg.message.substring(0, typingProgress.charIndex)
            : msg.message;
          
          // Render status messages differently
          if (msg.isStatus) {
            return (
              <div key={index} className="relative shrink-0 w-full">
                <div className="content-stretch flex gap-[14.044px] items-center px-0 py-0 relative w-full">
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">
                    {msg.time}
                  </p>
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-center bg-[#f9fafb] px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-full">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#717680" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M8 5.33333V8L10 10" stroke="#717680" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                      </div>
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] italic">
                        {msg.message}
                      </p>
                    </div>
                    {/* Join Call Button */}
                    {msg.requiresJoin && !natalieJoined && (
                      <button 
                        onClick={() => setNatalieJoined(true)}
                        className="content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative shrink-0 bg-[#079455] rounded-[6px] hover:bg-[#067a47] transition-colors cursor-pointer"
                      >
                        <div className="relative shrink-0 size-[14px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <path d="M5.25 5.25V3.79167C5.25 2.86717 5.99633 2.16667 6.94983 2.16667C7.88517 2.16667 8.63733 2.88467 8.63733 3.79167V5.25M2.91667 5.25H11.0833C11.5896 5.25 12 5.66041 12 6.16667V11.0833C12 11.5896 11.5896 12 11.0833 12H2.91667C2.41041 12 2 11.5896 2 11.0833V6.16667C2 5.66041 2.41041 5.25 2.91667 5.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-white text-[12px]">
                          Join Call as Natalie Green
                        </p>
                      </button>
                    )}
                    {/* Natalie Joined Status */}
                    {msg.requiresJoin && natalieJoined && (
                      <div className="content-stretch flex gap-[8px] items-center bg-[#ecfdf3] px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-full">
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d="M13.3333 4L6 11.3333L2.66666 8" stroke="#079455" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#079455] text-[12px] italic">
                          Natalie Green joined the call
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={index} className="relative shrink-0 w-full">
              <div className="content-stretch flex gap-[14.044px] items-start px-0 py-0 relative w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#717680] text-[11px] text-center text-nowrap">
                  {msg.time}
                </p>
                <div className="basis-0 content-stretch flex flex-col gap-[2.341px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[4.681px] items-start relative shrink-0">
                        <p className={`font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[12px] text-center text-nowrap ${msg.speaker === 'FRM Agent' || msg.speaker === 'Natalie Green' ? 'text-[#871b4c]' : 'text-[#253382]'}`}>
                          {msg.speaker}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[4.681px] items-start leading-[1.5] relative rounded-[9.363px] shrink-0 text-[#181d27] text-[13px] w-full">
                      {displayedText.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="relative shrink-0 w-full">
                          {paragraph}
                          {isCurrentlyTyping && pIndex === displayedText.split('\n\n').length - 1 && (
                            <span className="inline-block w-[2px] h-[14px] bg-[#871b4c] ml-[2px] animate-pulse" />
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={transcriptEndRef} />
      </div>
    </div>
  );
}