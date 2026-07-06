import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import NotificationBell from "@/components/notification-bell";

export default function MobileHeader({ role }: { role: "management" | "staff" }) {
  return (
    <div
      className="lg:hidden flex items-center justify-between px-4 py-3 sticky top-0 z-40"
      style={{ background: "#1A2744", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="rounded-lg px-2.5 py-1.5" style={{ background: "rgba(255,255,255,0.96)" }}>
        <Image src="/imperialhomesgh_logo.jpg" alt="Imperial Homes" width={110} height={36} className="object-contain" priority />
      </div>
      <div className="flex items-center gap-2">
        <NotificationBell role={role} />
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-md"
          style={{
            background: role === "management" ? "rgba(196,163,90,0.2)" : "rgba(255,255,255,0.1)",
            color: role === "management" ? "#C4A35A" : "rgba(255,255,255,0.6)",
            fontSize: "10px",
          }}
        >
          {role === "management" ? "HR MANAGER" : "STAFF"}
        </span>
        <Link href="/login" style={{ color: "rgba(255,255,255,0.4)" }}>
          <LogOut className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
