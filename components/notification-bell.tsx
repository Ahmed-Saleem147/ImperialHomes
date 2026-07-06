"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Bell, X, CheckCheck, Clock, UserX, CalendarCheck, CalendarX, CalendarClock, Info } from "lucide-react";
import { notifications as initialNotifications, type Notification } from "@/lib/mock-data";
import Link from "next/link";

const iconMap: Record<Notification["type"], React.ElementType> = {
  late: Clock, absent: UserX, leave_approved: CalendarCheck,
  leave_denied: CalendarX, leave_request: CalendarClock, shift: CalendarCheck, info: Info,
};

const colorMap: Record<Notification["type"], { bg: string; color: string }> = {
  late:           { bg: "#FEF3C7", color: "#D97706" },
  absent:         { bg: "#FEE2E2", color: "#DC2626" },
  leave_approved: { bg: "#DCFCE7", color: "#16A34A" },
  leave_denied:   { bg: "#FEE2E2", color: "#DC2626" },
  leave_request:  { bg: "#EDE9FE", color: "#7C3AED" },
  shift:          { bg: "rgba(196,163,90,0.15)", color: "#C4A35A" },
  info:           { bg: "#EFF6FF", color: "#3B82F6" },
};

export default function NotificationBell({ role }: { role: "management" | "staff" }) {
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [items, setItems] = useState<Notification[]>(
    initialNotifications.filter((n) => n.for === role || n.for === "both")
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  const unread = items.filter((n) => !n.read).length;

  // Calculate fixed position from button's screen coords
  function handleOpen() {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        left: Math.min(rect.right - 320, window.innerWidth - 328),
      });
    }
    setOpen((v) => !v);
  }

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        const dropdown = document.getElementById("notification-dropdown");
        if (dropdown && !dropdown.contains(e.target as Node)) setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function markAllRead() { setItems((prev) => prev.map((n) => ({ ...n, read: true }))); }
  function markRead(id: number) { setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n))); }

  const dropdown = (
    <div
      id="notification-dropdown"
      className="rounded-2xl shadow-2xl overflow-hidden"
      style={{
        position: "fixed",
        top: dropdownPos.top,
        left: dropdownPos.left,
        width: "320px",
        background: "#FFFFFF",
        border: "1px solid #F0EDE8",
        zIndex: 9999,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid #F0EDE8" }}>
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm" style={{ color: "#1A2744" }}>Notifications</span>
          {unread > 0 && (
            <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full text-white" style={{ background: "#DC2626" }}>{unread}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {unread > 0 && (
            <button onClick={markAllRead} className="flex items-center gap-1 text-xs font-medium" style={{ color: "#C4A35A" }}>
              <CheckCheck className="w-3.5 h-3.5" /> Mark all read
            </button>
          )}
          <button onClick={() => setOpen(false)} style={{ color: "#9CA3AF" }}>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="overflow-y-auto" style={{ maxHeight: "360px" }}>
        {items.length === 0 ? (
          <div className="px-4 py-10 text-center text-sm" style={{ color: "#9CA3AF" }}>No notifications</div>
        ) : (
          items.map((n) => {
            const Icon = iconMap[n.type];
            const c = colorMap[n.type];
            return (
              <button
                key={n.id}
                onClick={() => markRead(n.id)}
                className="w-full text-left flex items-start gap-3 px-4 py-3 transition-colors hover:bg-gray-50"
                style={{ borderBottom: "1px solid #F9F8F5", background: n.read ? "transparent" : "rgba(196,163,90,0.04)" }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: c.bg }}>
                  <Icon className="w-4 h-4" style={{ color: c.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-semibold" style={{ color: "#1A2744" }}>{n.title}</p>
                    {!n.read && <span className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ background: "#C4A35A" }} />}
                  </div>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#6B7280" }}>{n.message}</p>
                  <p className="text-xs mt-1" style={{ color: "#9CA3AF" }}>{n.time}</p>
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Footer */}
      <Link
        href={role === "management" ? "/management/notifications" : "/staff/notifications"}
        onClick={() => setOpen(false)}
        className="flex items-center justify-center py-3 text-xs font-semibold transition-colors hover:bg-gray-50"
        style={{ borderTop: "1px solid #F0EDE8", color: "#C4A35A" }}
      >
        View all notifications
      </Link>
    </div>
  );

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleOpen}
        className="relative flex items-center justify-center w-8 h-8 rounded-lg transition-colors hover:bg-white/10"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        <Bell className="w-4 h-4" />
        {unread > 0 && (
          <span
            className="absolute -top-1 -right-1 flex items-center justify-center text-white font-bold rounded-full"
            style={{ background: "#DC2626", fontSize: "9px", minWidth: "16px", height: "16px", padding: "0 3px" }}
          >
            {unread}
          </span>
        )}
      </button>

      {open && typeof document !== "undefined" && createPortal(dropdown, document.body)}
    </>
  );
}
