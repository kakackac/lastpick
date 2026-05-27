import cors from "@fastify/cors";
import Fastify from "fastify";
import { registerRoutes } from "./routes";

const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: true,
});

registerRoutes(app);

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "0.0.0.0";

await app.listen({ host, port });

