// @ts-check
import { defineConfig } from 'astro/config';

// inotify does not cross the WSL2 <-> Windows filesystem boundary, so the
// Docker dev container on Windows needs a polling watcher. A Linux host with
// the repo on a native filesystem does not, and polling there is wasted CPU.
const usePolling = process.env.WATCH_POLLING === 'true';

export default defineConfig({
  server: {
    host: true, // bind 0.0.0.0 so the port is reachable off the machine
    port: 4321,
  },
  vite: {
    server: {
      watch: usePolling ? { usePolling: true, interval: 300 } : {},
    },
  },
});
