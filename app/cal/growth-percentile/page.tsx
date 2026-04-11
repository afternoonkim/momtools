import { permanentRedirect } from "next/navigation";

export default function LegacyCalculatorRedirectPage() {
  permanentRedirect("/tools/growth-percentile");
}
