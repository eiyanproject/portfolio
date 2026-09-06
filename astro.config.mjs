// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true, // bind 0.0.0.0 so the port is reachable from Windows
    port: 4321,
  },
  vite: {
    server: {
      watch: {
        // inotify does not cross the WSL2 <-> Windows filesystem boundary,
        // so hot reload needs polling for files on the bind mount
        usePolling: true,
        interval: 300,
      },
    },
  },
});
