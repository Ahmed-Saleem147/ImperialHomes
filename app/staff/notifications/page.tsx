"use client";
import { useState } from "react";
import { notifications as initial, type Notification } from "@/lib/mock-data";
import { Clock, UserX, CalendarCheck, CalendarX, CalendarClock, Info, CheckCheck } from "lucide-react";
import TopBar from "@/components/top-bar";

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

export default function StaffNotificationsPage() {
  const [items, setItems] = useState<Notification[]>(
    initial.filter((n) => n.for === "staff" || n.for === "both")
  );

  const unread = items.filter((n) => !n.read).length;

  function markAll() { setItems((p) => p.map((n) => ({ ...n, read: true }))); }
  function markOne(id: number) { setItems((p) => p.map((n) => n.id === id ? { ...n, read: true } : n)); }

  return (
    <>
      <TopBar role="staff" name="Kofi Boateng" initials="KB" />
      <div className="p-4 lg:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: "#1A2744" }}>Notifications</h1>
            <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
              {unread > 0 ? `${unread} unread notification${unread > 1 ? "s" : ""}` : "All caught up"}
            </p>
          </div>
          {unread > 0 && (
            <button
              onClick={markAll}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold"
              style={{ background: "rgba(196,163,90,0.15)", color: "#C4A35A" }}
            >
              <CheckCheck className="w-3.5 h-3.5" /> Mark all read
            </button>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-2xl" style={{ border: "1px solid #F0EDE8" }}>
          {items.map((n) => {
            const Icon = iconMap[n.type];
            const c = colorMap[n.type];
            return (
              <button
                key={n.id}
                onClick={() => markOne(n.id)}
                className="w-full text-left flex items-start gap-4 px-5 py-4 transition-colors hover:bg-gray-50"
                style={{
                  borderBottom: "1px solid #F9F8F5",
                  background: n.read ? "transparent" : "rgba(196,163,90,0.04)",
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: c.bg }}>
                  <Icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold" style={{ color: "#1A2744" }}>{n.title}</p>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs" style={{ color: "#9CA3AF" }}>{n.time}</span>
                      {!n.read && <span className="w-2 h-2 rounded-full" style={{ background: "#C4A35A" }} />}
                    </div>
                  </div>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: "#6B7280" }}>{n.message}</p>
                </div>
              </button>
            );
          })}
          {items.length === 0 && (
            <div className="py-16 text-center text-sm" style={{ color: "#9CA3AF" }}>No notifications yet.</div>
          )}
        </div>
      </div>
    </>
  );
}

