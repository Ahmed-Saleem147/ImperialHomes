"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CalendarX2, CalendarDays, LogOut } from "lucide-react";

const navItems = [
  { label: "My Attendance", href: "/staff", icon: LayoutDashboard },
  { label: "Request Leave", href: "/staff/leave", icon: CalendarX2 },
  { label: "My Schedule", href: "/staff/schedule", icon: CalendarDays },
];

export default function StaffSidebar() {
  const pathname = usePathname();
  return (
    <aside
      className="w-56 shrink-0 flex flex-col h-screen sticky top-0"
      style={{ background: "#1A2744", borderRight: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="px-4 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="rounded-lg px-3 py-2 mb-3" style={{ background: "rgba(255,255,255,0.96)" }}>
          <Image
            src="/imperialhomesgh_logo.jpg"
            alt="Imperial Homes Ghana"
            width={148}
            height={50}
            className="object-contain w-full"
            priority
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", fontSize: "10px" }}>
            STAFF PORTAL
          </span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px" }}>ATTENDANCE</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all"
              style={{
                background: active ? "rgba(196,163,90,0.15)" : "transparent",
                color: active ? "#C4A35A" : "rgba(255,255,255,0.55)",
                fontWeight: active ? 600 : 400,
              }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: "#C4A35A" }}>
            KB
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-medium truncate">Kofi Boateng</p>
            <p className="text-xs truncate" style={{ color: "rgba(255,255,255,0.4)" }}>Sales Director · IH003</p>
          </div>
        </div>
        <Link
          href="/login"
          className="flex items-center gap-2 text-xs py-2 px-3 rounded-lg w-full transition-colors hover:bg-white/5"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
