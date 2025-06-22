import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuração para fallback do SPA
    historyApiFallback: true,
    // Alternativa correta para fallback no Vite
    history: {
      fallback: true
    }
  }
})
