import { permanentRedirect } from "next/navigation";

export default function DaycarePrepLegacyRedirectPage() {
  permanentRedirect("/en/checklists/daycare");
}
