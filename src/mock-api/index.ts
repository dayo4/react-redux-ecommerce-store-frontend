import { createServer, Factory, Model, Server } from "miragejs";
import Auth from "./auth";
import Products from "./products";

export function mockApi({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    timing: 200,
    models: {
      user: Model,
      category: Model,
    },

    routes() {
    //   this.namespace = "";
      this.urlPrefix = process.env.NEXT_PUBLIC_BASE_URL;

      Auth.routes(this);
      Products.routes(this);

      this.urlPrefix = "";
        this.passthrough((request) => {
          if (request.url.startsWith('http://localhost')) {
            return true; // Allow these requests to bypass MirageJS
          }
        })
    //   this.passthrough();
    },
    fixtures: {
      categories: Products.categories,
    },
    factories: {
      user: Factory.extend({
        name: "John",
        acc(i) {
          return `User ${i}`;
        },
      }),
    },

    seeds(server) {
      server.loadFixtures();
      server.createList("user", 5);
    },
  });

  //   if (environment === "development") {
  //   }

  return server;
}
