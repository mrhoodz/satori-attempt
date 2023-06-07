/* eslint-disable qwik/jsx-img */
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

// export const useImageGen = routeLoader$(async () => {
//   // This code runs only on the server, after every navigation

//   const res = await fetch("http://localhost:5173/sat");

//   const resFinal = await JSON.stringify(res);

//   console.log(res);
//   return resFinal;
// });

export default component$(() => {
  // const imageGen: any = useImageGen();

  // console.log(imageGen);

  useVisibleTask$(() => {
    // console.log(imageGen);
  });

  return (
    <>
      <h1>headingxxx</h1>
      {/* <p>{JSON.stringify(imageGen.value)}</p> */}
      <img src="https://next-satori.vercel.app/api/og" alt="jdjdj" />
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
        content: "https://next-satori.vercel.app/api/og",
      },
    ],
  };
};
