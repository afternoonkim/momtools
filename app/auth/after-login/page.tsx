import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export default async function AfterLoginPage() {
  const user = await getCurrentUser();

  if (!user) redirect("/login?next=/auth/after-login");
  if (!user.children.length) redirect("/child/new");
  redirect("/my");
}
