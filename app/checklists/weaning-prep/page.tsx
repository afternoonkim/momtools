import { permanentRedirect } from "next/navigation";

export default function WeaningPrepLegacyRedirectPage() {
  permanentRedirect("/checklists/weaning");
}
