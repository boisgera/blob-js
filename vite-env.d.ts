/// <reference types="vite/client" />

declare module '@vitejs/plugin-react' {
  import { Plugin } from 'vite'
  export default function react(options?: any): Plugin
}

declare module '@danielx/civet/vite' {
  import { Plugin } from 'vite'
  
  interface CivetOptions {
    ts?: 'civet' | 'preserve' | 'esbuild'
  }
  
  export default function civet(options?: CivetOptions): Plugin
}