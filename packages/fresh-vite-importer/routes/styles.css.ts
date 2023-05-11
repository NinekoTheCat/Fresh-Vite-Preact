import { HandlerContext } from "https://deno.land/x/rutt@0.1.0/mod.ts";

const libraryCSS = await Deno.readTextFile("dist/packages/vite-preact-lib/index.css");

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
    const response = new Response(libraryCSS)
    response.headers.set("Content-Type", "text/css")
    return response
};