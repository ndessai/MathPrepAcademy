import { serve } from "@hono/node-server";

import { createApp } from "./app";
import { DATABASE_PATH, DEV_LOGIN_ENABLED, GOOGLE_CLIENT_ID, PORT } from "./config";
import { openDatabase } from "./db";

const db = openDatabase(DATABASE_PATH);
const app = createApp(db, {
  googleClientId: GOOGLE_CLIENT_ID,
  devLoginEnabled: DEV_LOGIN_ENABLED,
});

serve({ fetch: app.fetch, port: PORT }, (info) => {
  console.log(`@mathprep/api listening on http://localhost:${info.port} (db: ${DATABASE_PATH})`);
});
