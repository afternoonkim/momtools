import { permanentRedirect } from "next/navigation";

export default function BabyNameGeneratorRedirectPage() {
  permanentRedirect("/baby-names");
}
