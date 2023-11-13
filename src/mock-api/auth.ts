import { Factory, Model, Server } from "miragejs";

interface User {
  id: number;
  name: string;
}

export default {
  routes(server: Server) {
    server.post("/login", () => ({
      id: 1,
      name: "John Doe",
    }));
  },
  data: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]
}
