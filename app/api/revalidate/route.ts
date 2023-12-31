import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  if (request.method != "POST") {
    return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
      status: 405,
      statusText: "Method Not Allowed",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const crypto = require("crypto");
  const signature = request.headers.get("X-Hub-Signature-256");

  if (!signature) {
    return new NextResponse(JSON.stringify({ message: "Invalid Signature" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const bodyJSON = await request.json();
  const bodySansWhitespace = JSON.stringify(bodyJSON).replace(
    "/^s+|s+$|s+(?=s)/g",
    ""
  );

  const hmac = crypto.createHmac("sha256", process.env.GITHUB_WEBHOOK_SECRET);
  const calculatedSignature =
    "sha256=" + hmac.update(bodySansWhitespace).digest("hex");

  const isBufferLengthEqual =
    Buffer.byteLength(signature, "utf-8") ===
    Buffer.byteLength(calculatedSignature, "utf-8");
  const isTimingSafeEqual =
    isBufferLengthEqual &&
    crypto.timingSafeEqual(
      Buffer.from(signature, "utf-8"),
      Buffer.from(calculatedSignature, "utf-8")
    );

  if (!isTimingSafeEqual) {
    return new NextResponse(JSON.stringify({ message: "Signature Mismatch" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json({ revalidated: true });
}
