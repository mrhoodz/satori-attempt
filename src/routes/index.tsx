import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

export const useImageGen = routeLoader$(async () => {
  // This code runs only on the server, after every navigation

  const res = await fetch("http://localhost:5173/sat");

  const resFinal = await res.json();

  // console.log(resFinal);
  return resFinal;
});

export default component$(() => {
  const imageGen: any = useImageGen();

  console.log(imageGen.value);

  useVisibleTask$(() => {
    console.log(imageGen.value);
  });

  return (
    <>
      <h1>heading</h1>
      <p>{JSON.stringify(imageGen.value)}</p>
      {/* <img src="http://localhost:5173/api/imageGen" alt="jdjdj" /> */}
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
