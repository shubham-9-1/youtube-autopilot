import cors from "cors";
import express, { type ErrorRequestHandler } from "express";
import helmet from "helmet";
import { healthRouter } from "./routes/health.routes.js";

export function createApp() {
  const app = express();
  const allowedOrigin = process.env.WEB_ORIGIN ?? "http://localhost:3000";

  app.disable("x-powered-by");
  app.use(helmet());
  app.use(cors({ origin: allowedOrigin, credentials: true }));
  app.use(express.json({ limit: "1mb" }));

  app.get("/", (_request, response) => {
    response.status(200).json({
      name: "YouTube Autopilot API",
      message: "API is running. See /api/v1/health for service status.",
    });
  });

  app.use("/api/v1/health", healthRouter);

  app.use((_request, response) => {
    response.status(404).json({
      success: false,
      error: { code: "ROUTE_NOT_FOUND", message: "The requested route does not exist." },
    });
  });

  const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
    console.error("Unhandled API error:", error);
    response.status(500).json({
      success: false,
      error: { code: "INTERNAL_SERVER_ERROR", message: "An unexpected error occurred." },
    });
  };

  app.use(errorHandler);
  return app;
}
