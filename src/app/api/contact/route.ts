import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    let name = "";
    let email = "";
    let phone = "";
    let subject = "";
    let message = "";
    let isFormData = false;

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = body.name || "";
      email = body.email || "";
      phone = body.phone || "";
      subject = body.subject || body.service || "";
      message = body.message || "";
    } else {
      isFormData = true;
      const formData = await req.formData();
      name = formData.get("name")?.toString() || "";
      email = formData.get("email")?.toString() || "";
      phone = formData.get("phone")?.toString() || "";
      subject = formData.get("subject")?.toString() || formData.get("service")?.toString() || "";
      message = formData.get("message")?.toString() || "";
    }

    if (!name || !email || !message) {
      if (isFormData) {
        return NextResponse.redirect(new URL("/contact?error=missing_fields", req.url), 303);
      }
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, save to database and dispatch email via Nodemailer / Resend
    console.log("Contact submission received:", { name, email, phone, subject, message });

    if (isFormData) {
      return NextResponse.redirect(new URL("/contact?success=true", req.url), 303);
    }

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully. Our team will contact you within 2 business hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again later." },
      { status: 500 }
    );
  }
}
