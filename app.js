import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response("Hello world!");
};

serve(handleRequest, { port: 7777 });
