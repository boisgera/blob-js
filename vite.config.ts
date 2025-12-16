import { defineConfig } from 'vite'
import civetPlugin from '@danielx/civet/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    civetPlugin({}), 
    react()
  ],
})
