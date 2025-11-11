import Link from "next/link";
import Image from "next/image";
import { KavzornHeader } from "@kavzorn/ui";

export default function AppHeader() {
  return (
    <KavzornHeader
      currentApp="format"
      Link={Link as any}
      Image={Image as any}
    />
  );
}
