import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import NotificationBell from "@/components/notification-bell";

interface TopBarProps {
  role: "management" | "staff";
  name: string;
  initials: string;
  title?: string;
}

export default function TopBar({ role, name, initials, title }: TopBarProps) {
  return (
    <div
      className="sticky top-0 z-40 flex items-center justify-between px-4 lg:px-8 py-3"
      style={{ background: "#FFFFFF", borderBottom: "1px solid #F0EDE8" }}
    >
      {/* Left — logo on mobile, page title on desktop */}
      <div>
        <div className="lg:hidden rounded-lg px-2.5 py-1.5" style={{ background: "#1A2744" }}>
          <Image src="/imperialhomesgh_logo.jpg" alt="Imperial Homes" width={100} height={32} className="object-contain" priority />
        </div>
        {title && (
          <p className="hidden lg:block text-sm font-medium" style={{ color: "#9CA3AF" }}>
            Imperial Homes &rsaquo; <span style={{ color: "#1A2744" }}>{title}</span>
          </p>
        )}
      </div>

      {/* Right — bell + user */}
      <div className="flex items-center gap-3">
        {/* Bell — dark bg for mobile, light for desktop */}
        <div
          className="flex items-center justify-center w-9 h-9 rounded-lg"
          style={{ background: "#1A2744" }}
        >
          <NotificationBell role={role} />
        </div>

        {/* User pill — desktop only */}
        <div className="hidden lg:flex items-center gap-2.5 px-3 py-2 rounded-lg" style={{ background: "#F5F5F0" }}>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
            style={{ background: role === "management" ? "#C4A35A" : "#1A2744" }}
          >
            {initials}
          </div>
          <div>
            <p className="text-xs font-semibold leading-none" style={{ color: "#1A2744" }}>{name}</p>
            <p className="text-xs mt-0.5" style={{ color: "#9CA3AF", fontSize: "10px" }}>
              {role === "management" ? "HR Manager" : "Staff"}
            </p>
          </div>
        </div>

        {/* Role badge — mobile only */}
        <span
          className="lg:hidden text-xs font-semibold px-2.5 py-1 rounded-md"
          style={{
            background: role === "management" ? "rgba(196,163,90,0.15)" : "#F0EDE8",
            color: role === "management" ? "#C4A35A" : "#6B7280",
            fontSize: "10px",
          }}
        >
          {role === "management" ? "HR MANAGER" : "STAFF"}
        </span>

        {/* Sign out */}
        <Link
          href="/login"
          className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors hover:bg-gray-100"
          style={{ color: "#9CA3AF" }}
        >
          <LogOut className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
