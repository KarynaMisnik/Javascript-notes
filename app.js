import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response("Hello you!");
};

serve(handleRequest, { port: 7777 });
