import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    let name = "";
    let email = "";
    let phone = "";
    let company = "";
    let services: string[] = [];
    let budget = "";
    let timeline = "";
    let details = "";
    let isFormData = false;

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = body.name || "";
      email = body.email || "";
      phone = body.phone || "";
      company = body.company || "";
      services = Array.isArray(body.services) ? body.services : [];
      budget = body.budget || "";
      timeline = body.timeline || "";
      details = body.details || body.message || "";
    } else {
      isFormData = true;
      const formData = await req.formData();
      name = formData.get("name")?.toString() || "";
      email = formData.get("email")?.toString() || "";
      phone = formData.get("phone")?.toString() || "";
      company = formData.get("company")?.toString() || "";
      services = formData.getAll("services").map((s) => s.toString());
      budget = formData.get("budget")?.toString() || "";
      timeline = formData.get("timeline")?.toString() || "";
      details = formData.get("message")?.toString() || formData.get("details")?.toString() || "";
    }

    if (!name || !email || !phone) {
      if (isFormData) {
        return NextResponse.redirect(new URL("/get-a-quote?error=missing_fields", req.url), 303);
      }
      return NextResponse.json(
        { error: "Missing required contact details" },
        { status: 400 }
      );
    }

    // In production, save to Lead CRM database and trigger instant sales notification
    console.log("New Lead Wizard quote submission:", { name, email, phone, company, services, budget, timeline, details });

    if (isFormData) {
      return NextResponse.redirect(new URL("/get-a-quote?success=true", req.url), 303);
    }

    return NextResponse.json(
      { success: true, message: "Lead captured successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
