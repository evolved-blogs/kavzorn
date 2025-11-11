import Link from "next/link";
import Image from "next/image";
import { KavzornHeader } from "@kavzorn/ui";

export default function Header() {
  return (
    <KavzornHeader currentApp="web" Link={Link as any} Image={Image as any} />
  );
}
