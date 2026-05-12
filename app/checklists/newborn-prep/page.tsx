import { permanentRedirect } from "next/navigation";

export default function NewbornPrepLegacyRedirectPage() {
  permanentRedirect("/checklists/newborn");
}
