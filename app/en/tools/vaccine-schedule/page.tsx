import { permanentRedirect } from "next/navigation";

export default function EnVaccineRedirectPage() {
  permanentRedirect("/en/cal/vaccine-schedule");
}
