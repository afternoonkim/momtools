import { permanentRedirect } from "next/navigation";

export default function BirthPrepLegacyRedirectPage() {
  permanentRedirect("/en/checklists/birth");
}
