import { permanentRedirect } from "next/navigation";

export default function EnDueDateRedirectPage() {
  permanentRedirect("/en/cal/due-date");
}
