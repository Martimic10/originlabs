import { NextResponse } from "next/server";
import { insertProjectInquiry } from "@/lib/db";
import {
  type ProjectInquiry,
  validateProjectInquiry,
} from "@/lib/project-inquiry";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ProjectInquiry>;
    const error = validateProjectInquiry(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const inquiry: ProjectInquiry = {
      name: body.name!.trim(),
      email: body.email!.trim().toLowerCase(),
      company: body.company?.trim() || undefined,
      plan: body.plan!,
      timeline: body.timeline?.trim() || undefined,
      budget: body.budget?.trim() || undefined,
      message: body.message!.trim(),
    };

    await insertProjectInquiry(inquiry);

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll be in touch soon.",
    });
  } catch (err) {
    console.error("[project-inquiry]", err);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
