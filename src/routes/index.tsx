import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  useVisibleTask$(() => {});

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
});

export const head: DocumentHead = () => {
  // const domain = useLocation().url.origin

  // const domain = URL()
  return {
    title: "using satori in qwik",
    meta: [
      { name: "descrition", content: "Description of the page" },
      {
        property: "og:image",
        content: "https://satori-attempt-p3lo.vercel.app/sat",
      },
    ],
  };
};
