import { permanentRedirect } from "next/navigation";

export default function WeaningPrepLegacyRedirectPage() {
  permanentRedirect("/en/checklists/weaning");
}
