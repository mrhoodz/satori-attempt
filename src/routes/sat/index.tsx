import type { RequestHandler } from "@builder.io/qwik-city";

// Called with every HTTP request (regardless of method)
export const onGet: RequestHandler = async (requestEvent) => {
  // Respond with a JSON object

  const response = { hello: "worlddffdsfsdd" };

  requestEvent.json(200, response);
};
