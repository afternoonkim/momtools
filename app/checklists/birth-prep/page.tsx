import { permanentRedirect } from "next/navigation";

export default function BirthPrepLegacyRedirectPage() {
  permanentRedirect("/checklists/birth");
}
