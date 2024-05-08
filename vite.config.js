import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables from .env file
import { config } from 'dotenv';
config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_OPENWEATHER_API_KEY': JSON.stringify(process.env.REACT_APP_OPENWEATHER_API_KEY)
  }
});
