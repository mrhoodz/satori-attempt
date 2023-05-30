import type { RequestHandler } from "@builder.io/qwik-city";
import { ImageResponse } from "./og";

// Called with every HTTP request (regardless of method)
export const onRequest: RequestHandler = async ({ status, send, url }) => {
  try {
    const { searchParams } = new URL(url);
    // these values come from the original svg file. height auto is not supported by the og:image generator

    // ?size=<size>
    const hasSize = searchParams.has("size");
    const size = hasSize
      ? parseInt(searchParams.get("size")?.slice(0, 4) || "16", 10)
      : 16;

    const response = new ImageResponse(
      (
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            color: "black",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            fontSize: "30px",
          }}
        >
          gg
          <div
            style={{
              // position: "absolute",
              backgroundColor: "red",

              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // justifyItems: "center",
              // padding: 4,
              height: "20px",
              width: "20px",
            }}
          >
            hhfdhfdh
          </div>
        </div>
      ),
      {
        width: size,
        height: size,
      }
    );
    send(response as Response);
  } catch (e: any) {
    console.log(`${e.message}`);
    status(500);
  }
};
