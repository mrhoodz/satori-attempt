// import type { RequestHandler } from "@builder.io/qwik-city";
// // import { ImageResponse } from "./og";
// import satori from "satori";

// // Called with every HTTP request (regardless of method)
// // export const onGet: RequestHandler = async ({ status, send, url }) => {
// //   try {
// //     const { searchParams } = new URL(url);
// //     // these values come from the original svg file. height auto is not supported by the og:image generator

// //     // ?size=<size>
// //     const hasSize = searchParams.has("size");
// //     //l am manually setting the height and width of the image
// //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
// //     const size = hasSize
// //       ? parseInt(searchParams.get("size")?.slice(0, 4) || "16", 10)
// //       : 16;

// //     const response = new ImageResponse(
// //       (
// //         <div
// //           style={{
// //             height: "100%",
// //             width: "100%",
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             backgroundColor: "pink",
// //             fontSize: 32,
// //             fontWeight: 600,
// //           }}
// //         >
// //           <svg
// //             width="75"
// //             viewBox="0 0 75 65"
// //             fill="#000"
// //             style={{ margin: "0 75px" }}
// //           >
// //             <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
// //           </svg>
// //           <div style={{ marginTop: 40 }}>Hello, World</div>
// //         </div>
// //       ),
// //       {
// //         //manually setting height and with
// //         width: 200,
// //         height: 200,
// //       }
// //     );
// //     send(response as Response);
// //   } catch (e: any) {
// //     console.log(`${e.message}`);
// //     status(500);
// //   }
// // };

// export const onGet: RequestHandler = async (requestEvent) => {
//   // Respond with a JSON object

//   const fetchFont = async (url: RequestInfo | URL) => {
//     const response = await fetch(url);
//     const data = await response.arrayBuffer();
//     return data;
//   };
//   const fallbackFont = await fetchFont(
//     "http://localhost:5173/NotoSans-Regular.ttf"
//   );

//   //
//   const svg = await satori(<div style={{ color: "black" }}>hello, world</div>, {
//     width: 600,
//     height: 400,
//     fonts: [
//       {
//         name: "Noto-Sans",
//         // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
//         data: fallbackFont,
//         weight: 400,
//         style: "normal",
//       },
//     ],
//   });
//   //

//   const response = new Response(svg, {
//     status: 200,
//     headers: {
//       "content-type": "image/png",
//     },
//   });

//   // requestEvent.headers.set("content-type", "image/png");
//   requestEvent.send(response);
// };
