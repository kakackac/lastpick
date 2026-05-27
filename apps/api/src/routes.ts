import type { FastifyInstance } from "fastify";
import { createMockSaveBoxes } from "./sampleData";

export function registerRoutes(app: FastifyInstance) {
  app.get("/health", async () => ({
    ok: true,
    service: "savebox-api",
  }));

  app.get("/save-boxes/today", async () => ({
    data: createMockSaveBoxes(),
  }));

  app.post("/orders", async () => ({
    data: {
      id: "order_mock_001",
      pickupCode: "482913",
      status: "paid",
    },
  }));
}

