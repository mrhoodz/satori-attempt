import type { RequestHandler } from "@builder.io/qwik-city";
// import { ImageResponse } from "./og";

// Called with every HTTP request (regardless of method)
// export const onGet: RequestHandler = async ({ status, send, url }) => {
//   try {
//     const { searchParams } = new URL(url);
//     // these values come from the original svg file. height auto is not supported by the og:image generator

//     // ?size=<size>
//     const hasSize = searchParams.has("size");
//     //l am manually setting the height and width of the image
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const size = hasSize
//       ? parseInt(searchParams.get("size")?.slice(0, 4) || "16", 10)
//       : 16;

//     const response = new ImageResponse(
//       (
//         <div
//           style={{
//             position: "relative",
//             backgroundColor: "pink",
//             color: "black",
//             height: "100%",
//             width: "100%",
//             display: "flex",
//             textAlign: "center",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             flexWrap: "nowrap",
//           }}
//         >
//           Text
//         </div>
//       ),
//       {
//         //manually setting height and with
//         width: 200,
//         height: 200,
//       }
//     );
//     send(response as Response);
//   } catch (e: any) {
//     console.log(`${e.message}`);
//     status(500);
//   }
// };

export const onGet: RequestHandler = async (requestEvent) => {
  // Respond with a JSON object
  const res = await fetch("http://localhost:5173/sat");

  const resFinal = await res.json();

  const response = resFinal;

  requestEvent.json(200, response);
};
