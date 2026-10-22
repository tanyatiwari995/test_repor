import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { url, email } = body;

    if (!url || !email) {
      return NextResponse.json(
        { error: "URL and Email are required" },
        { status: 400 }
      );
    }

    console.log("SEO audit request received for:", url, "from:", email);

    return NextResponse.json(
      {
        success: true,
        score: 82,
        url,
        message: "Audit generated successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
