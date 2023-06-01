import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

// export const useImageGen = routeLoader$(async () => {
//   // This code runs only on the server, after every navigation

//   const res = await fetch("http://localhost:5173//api/imageGen");

//   const resFinal = await res.json();

//   console.log(resFinal);
// });

export default component$(() => {
  const imageGen: any = "useImageGen()";
  useVisibleTask$(() => {
    console.log(imageGen);
  });

  return (
    <>
      <h1>{"imageGen"}</h1>
      <img src="http://localhost:5173/api/imageGen" alt="jdjdj" />
    </>
  );
});

export const head: DocumentHead = () => {
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
