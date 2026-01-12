/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENAI_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Allow importing audio files
declare module '*.mp3' {
  const src: string;
  export default src;
}
