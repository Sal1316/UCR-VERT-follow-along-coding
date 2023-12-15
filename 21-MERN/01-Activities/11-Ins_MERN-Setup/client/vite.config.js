import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Important for MERN Setup: Here we're establishing a relationship between our two development servers.
    // We are pointing our Vite client-side development server to proxy API requests to our server-side Node server at port 3001.
    // Without this line, API calls would attempt to fallback and query for data from the current domain: localhost:3000
    proxy: {
      '/graphql': { // means, anything that is going to '/graphql', reroute it to localhost:3001 where my server is running.
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false, // whether or not you are working on an https service.
      },     
    }
  }
})


/* NOTES: 
- Client runs on port 3000, and
  Server runs on port 3001.

- Cross Origin Resource Sharing (CORS) prevents unathorized domains from accessing your server.

- proxy: server intercepts the requests to local host and forwards them to the server you specified. Which is.... localhost:3001.
  Proxy just reroutes everything thats going to /graphql and sends it to the target, which is our local host.

*/ 