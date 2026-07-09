export type ProjectPlan =
  | "landing"
  | "business"
  | "ai"
  | "native"
  | "not-sure";

export type ProjectInquiry = {
  name: string;
  email: string;
  company?: string;
  plan: ProjectPlan;
  timeline?: string;
  budget?: string;
  message: string;
};

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateProjectInquiry(
  data: Partial<ProjectInquiry>,
): string | null {
  if (!data.name?.trim()) return "Name is required.";
  if (!data.email?.trim()) return "Email is required.";
  if (!isValidEmail(data.email)) return "Please enter a valid email.";
  if (!data.plan) return "Please select a project type.";
  if (!data.message?.trim()) return "Please tell us about your project.";
  if (data.message.trim().length < 20) {
    return "Please share a bit more detail about your project.";
  }
  return null;
}
