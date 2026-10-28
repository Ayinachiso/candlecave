declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    CANDLECAVE_ADMIN_EMAIL?: string;
    BUCKET?: R2Bucket;
  }
}
