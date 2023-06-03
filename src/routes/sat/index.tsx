// /** @jsxImportSource react */
// import { type RequestHandler } from "@builder.io/qwik-city";
// import { ImageResponse } from "@vercel/og";
// // import { ImageResponse } from "";
// // import * as wasmModule from "../../../node_modules/@vercel/og/dist"

// // Called with every HTTP request (regardless of method)
// // export const onGet: RequestHandler = async (requestEvent) => {
// //   // Respond with a JSON object

// //   const response = new ImageResponse(
// //     (
// //       <div
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           fontSize: 128,
// //           background: "lavender",
// //         }}
// //       >
// //         Hello!
// //       </div>
// //     ),
// //     {
// //       height: 1280,
// //       width: 199,
// //     }
// //   );

// //   requestEvent.send(200, response);
// // };

// export const onGet: RequestHandler = async ({ status, send, url }) => {
//   try {
//     // const { searchParams } = new URL(url);
//     // // these values come from the original svg file. height auto is not supported by the og:image generator

//     // // ?size=<size>
//     // const hasSize = searchParams.has("size");
//     // //l am manually setting the height and width of the image
//     // // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     // const size = hasSize
//     //   ? parseInt(searchParams.get("size")?.slice(0, 4) || "16", 10)
//     //   : 16;

//     const { searchParams } = new URL(url);
//     // searchParams.has("title")

//     const Title =
//       searchParams.get("title")?.length > 1
//         ? searchParams.get("title")
//         : "is this a joke";
//     console.log(Title);

//     const response = new ImageResponse(
//       (
//         <div
//           style={{
//             height: "100%",
//             width: "100%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "pink",
//             fontSize: 32,
//             fontWeight: 600,
//           }}
//         >
//           <svg
//             width="75"
//             viewBox="0 0 75 65"
//             fill="#000"
//             style={{ margin: "0 75px" }}
//           >
//             <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
//           </svg>
//           <div style={{ marginTop: 40, color: "red" }}>Welcome to</div>
//           <div style={{ marginTop: -10, color: "blue", fontSize: 30 }}>
//             {Title}
//           </div>
//         </div>
//       )
//     );
//     send(response as Response);
//   } catch (e: any) {
//     console.log(`${e.message}`);
//     status(500);
//   }
// };
