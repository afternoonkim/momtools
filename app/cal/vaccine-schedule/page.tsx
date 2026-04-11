import { permanentRedirect } from "next/navigation";

export default function LegacyCalculatorRedirectPage() {
  permanentRedirect("/tools/vaccine-schedule");
}
