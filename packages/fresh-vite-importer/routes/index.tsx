import { Head } from "$fresh/runtime.ts";
import HelloVite from "vite-library";
import Island from "../islands/vite_island.tsx";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App with vite</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <div class = "flex flex-row">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <img class="w-32 h-32" src="https://vitejs.dev/logo.svg" alt="Vite logo"/>
        <img class="w-32 h-32" src="https://preactjs.com/assets/branding/symbol.svg" 
        alt="Preact Logo"/>
        </div>
        
        <p class="my-6">
          Wow look it even builds!
        </p>
        <HelloVite/>
        <Island/>
      </div>
    </>
  );
}
