import "dotenv/config";
import { createApp } from "./app.js";

const port = Number(process.env.PORT ?? 4000);
const app = createApp();

const server = app.listen(port, () => {
  console.log(`YouTube Autopilot API listening on http://localhost:${port}`);
  console.log(`Health check: http://localhost:${port}/api/v1/health`);
});

function shutdown(signal: string) {
  console.log(`${signal} received. Closing API server...`);
  server.close((error) => {
    if (error) {
      console.error("Error while closing server:", error);
      process.exit(1);
    }
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
