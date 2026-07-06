"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Building2, Users, FileText,
  CalendarDays, LogOut, CalendarX2, LayoutDashboard,
} from "lucide-react";
import NotificationBell from "@/components/notification-bell";

const navItems = [
  { label: "Analytics", href: "/management", icon: LayoutDashboard },
  { label: "Departments", href: "/management/departments", icon: Building2 },
  { label: "Staff", href: "/management/staff", icon: Users },
  { label: "Records", href: "/management/records", icon: FileText },
  { label: "Leave Requests", href: "/management/leave-requests", icon: CalendarX2 },
  { label: "Shifts", href: "/management/shifts", icon: CalendarDays },
];

export default function ManagementSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-56 shrink-0 flex flex-col h-screen sticky top-0"
      style={{ background: "#1A2744", borderRight: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Logo */}
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
          <span
            className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider"
            style={{ background: "rgba(196,163,90,0.15)", color: "#C4A35A", fontSize: "10px" }}
          >
            HR MANAGER
          </span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px" }}>ATTENDANCE</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
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

      {/* User */}
      <div className="px-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: "#C4A35A" }}>
            AM
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-white text-sm font-medium truncate">Abena Mensah</p>
            <p className="text-xs truncate" style={{ color: "rgba(255,255,255,0.4)" }}>a.mensah@imperialh...</p>
          </div>
          <NotificationBell role="management" />
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
