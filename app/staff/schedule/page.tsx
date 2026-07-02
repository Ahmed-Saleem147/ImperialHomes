import { shifts } from "@/lib/mock-data";
import { Clock } from "lucide-react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const myShift = shifts[0];

export default function SchedulePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#1A2744" }}>My Schedule</h1>
        <p className="text-sm mt-1" style={{ color: "#6B7280" }}>Your assigned work shift and schedule</p>
      </div>

      {/* Current shift */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6 max-w-lg" style={{ border: "1px solid #F0EDE8" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(196,163,90,0.12)" }}>
            <Clock className="w-5 h-5" style={{ color: "#C4A35A" }} />
          </div>
          <div>
            <h2 className="font-bold" style={{ color: "#1A2744" }}>{myShift.name}</h2>
            <p className="text-sm" style={{ color: "#6B7280" }}>{myShift.start_time} – {myShift.end_time}</p>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {daysOfWeek.map((day) => {
            const active = myShift.days.includes(day);
            return (
              <div
                key={day}
                className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold"
                style={{
                  background: active ? "#1A2744" : "#F9F8F5",
                  color: active ? "white" : "#D1CFC8",
                }}
              >
                {day}
              </div>
            );
          })}
        </div>

        <div className="rounded-lg p-3" style={{ background: "#F9F8F5" }}>
          <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#9CA3AF" }}>Late after</p>
          <p className="text-sm font-bold" style={{ color: "#1A2744" }}>8:30 AM</p>
        </div>
      </div>

      {/* This week calendar view */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ border: "1px solid #F0EDE8" }}>
        <div className="px-6 py-4" style={{ borderBottom: "1px solid #F0EDE8" }}>
          <h2 className="text-sm font-semibold" style={{ color: "#1A2744" }}>This Week — 30 Jun to 6 Jul 2026</h2>
        </div>
        <div className="grid grid-cols-7 divide-x" style={{ borderTop: "1px solid #F0EDE8" }}>
          {[
            { day: "Mon", date: "30", status: "present", time: "8:05 AM" },
            { day: "Tue", date: "1", status: "present", time: "8:11 AM" },
            { day: "Wed", date: "2", status: "present", time: "8:12 AM" },
            { day: "Thu", date: "3", status: null, time: null },
            { day: "Fri", date: "4", status: null, time: null },
            { day: "Sat", date: "5", status: "off", time: null },
            { day: "Sun", date: "6", status: "off", time: null },
          ].map((d) => {
            const isToday = d.date === "2";
            return (
              <div
                key={d.day}
                className="p-4 text-center"
                style={{
                  background: isToday ? "rgba(196,163,90,0.07)" : "transparent",
                  borderTop: isToday ? "2px solid #C4A35A" : "2px solid transparent",
                }}
              >
                <p className="text-xs font-semibold mb-1" style={{ color: isToday ? "#C4A35A" : "#9CA3AF" }}>{d.day}</p>
                <p className="text-lg font-bold mb-2" style={{ color: isToday ? "#1A2744" : "#6B7280" }}>{d.date}</p>
                {d.status === "present" && (
                  <div>
                    <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ background: "#16A34A" }} />
                    <p className="text-xs" style={{ color: "#9CA3AF" }}>{d.time}</p>
                  </div>
                )}
                {d.status === "off" && <p className="text-xs" style={{ color: "#D1CFC8" }}>Off</p>}
                {d.status === null && <p className="text-xs" style={{ color: "#D1CFC8" }}>—</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
