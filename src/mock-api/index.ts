import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.urlPrefix = process.env.NEXT_PUBLIC_BASE_URL;

      this.get("/users", () => ({
        users: [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Smith" },
        ],
      }));
    },
  });

  return server;
}
