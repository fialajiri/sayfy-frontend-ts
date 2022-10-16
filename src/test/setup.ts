import { server } from "../mocks/server";

beforeAll(() => {
  process.env.BACKEND_URL = "http://localhost:5000";
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
});
