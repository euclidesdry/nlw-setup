import Fastify from "fastify";
import cors from "@fastify/cors";

import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);

app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running on\x1B[34m http://localhost:3333");
  });
