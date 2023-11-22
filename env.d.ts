/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_URL: string;
  readonly IS_DEV: boolean;
  readonly PROJECT: 'frontend';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const API_URL: string;
declare const IS_DEV: boolean;
declare const PROJECT: 'frontend';
