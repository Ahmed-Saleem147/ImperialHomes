"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CalendarX2, CalendarDays } from "lucide-react";

const navItems = [
  { label: "Attendance", href: "/staff", icon: LayoutDashboard },
  { label: "Leave", href: "/staff/leave", icon: CalendarX2 },
  { label: "Schedule", href: "/staff/schedule", icon: CalendarDays },
];

export default function StaffMobileNav() {
  const pathname = usePathname();
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-1 py-2"
      style={{ background: "#1A2744", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      {navItems.map(({ label, href, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 px-6 py-1.5 rounded-xl transition-all"
            style={{ color: active ? "#C4A35A" : "rgba(255,255,255,0.4)" }}
          >
            <Icon className="w-5 h-5" />
            <span style={{ fontSize: "10px", fontWeight: active ? 600 : 400 }}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
