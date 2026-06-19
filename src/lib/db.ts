import { neon } from "@neondatabase/serverless";
import type { ProjectInquiry } from "@/lib/project-inquiry";

function getSql() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }
  return neon(connectionString);
}

export async function insertProjectInquiry(inquiry: ProjectInquiry) {
  const sql = getSql();

  const rows = await sql`
    INSERT INTO project_inquiries (name, email, company, plan, timeline, budget, message)
    VALUES (
      ${inquiry.name},
      ${inquiry.email},
      ${inquiry.company ?? null},
      ${inquiry.plan},
      ${inquiry.timeline ?? null},
      ${inquiry.budget ?? null},
      ${inquiry.message}
    )
    RETURNING id
  `;

  return rows[0];
}
