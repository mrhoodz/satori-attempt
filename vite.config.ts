import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import wasm from "vite-plugin-wasm";

export default defineConfig(() => {
  return {
    plugins: [wasm(), qwikCity(), qwikVite(), tsconfigPaths(), qwikReact()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
// function topLevelAwait(): import("vite").PluginOption {
//   throw new Error("Function not implemented.");
// }

