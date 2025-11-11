import Link from "next/link";
import Image from "next/image";
import { KavzornHeader } from "@kavzorn/ui";

interface ClockHeaderProps {
  currentApp: "digital" | "analog";
}

export default function ClockHeader({ currentApp }: ClockHeaderProps) {
  return (
    <KavzornHeader
      currentApp={currentApp === "digital" ? "digital-clock" : "analog-clock"}
      Link={Link as any}
      Image={Image as any}
    />
  );
}
