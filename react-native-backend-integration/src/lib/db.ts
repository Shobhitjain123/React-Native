import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURBO_DATABASE_URL!,
  authToken: process.env.TURBO_AUTH_TOKEN!,
});
