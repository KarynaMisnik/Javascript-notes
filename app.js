import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response(
    "Seeking truths beyond meaning of life, you will find 43."
  );
};

serve(handleRequest, { port: 7777 });
