import { shifts } from "@/lib/mock-data";
import { Clock, Building2 } from "lucide-react";
import MobileHeader from "@/components/mobile-header";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ShiftsPage() {
  return (
    <>
      <MobileHeader role="management" />
      <div className="p-4 lg:p-8">
        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: "#1A2744" }}>Shifts</h1>
            <p className="text-sm mt-1" style={{ color: "#6B7280" }}>Work schedules and assignments</p>
          </div>
          <button className="px-3 py-2 rounded-lg text-sm font-medium shrink-0" style={{ background: "#C4A35A", color: "white" }}>+ New</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          {shifts.map((shift) => (
            <div key={shift.id} className="bg-white rounded-xl p-5 shadow-sm" style={{ border: "1px solid #F0EDE8" }}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-sm" style={{ color: "#1A2744" }}>{shift.name}</h3>
                <div className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md" style={{ background: "rgba(196,163,90,0.12)", color: "#C4A35A" }}>
                  <Clock className="w-3 h-3" />{shift.start_time}–{shift.end_time}
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {daysOfWeek.map((day) => {
                  const active = shift.days.includes(day);
                  return (
                    <div key={day} className="flex-1 text-center py-1.5 rounded-md text-xs font-semibold"
                      style={{ background: active ? "#1A2744" : "#F9F8F5", color: active ? "white" : "#D1CFC8" }}>
                      {day[0]}
                    </div>
                  );
                })}
              </div>
              <div className="space-y-1.5">
                {shift.departments.map((dept) => (
                  <div key={dept} className="flex items-center gap-2 text-xs" style={{ color: "#6B7280" }}>
                    <Building2 className="w-3 h-3 shrink-0" style={{ color: "#C4A35A" }} />{dept}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ border: "1px solid #F0EDE8" }}>
          <div className="px-4 lg:px-6 py-4" style={{ borderBottom: "1px solid #F0EDE8" }}>
            <h2 className="text-sm font-semibold" style={{ color: "#1A2744" }}>Weekly Overview — 30 Jun 2026</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[420px]">
              <thead>
                <tr style={{ borderBottom: "1px solid #F0EDE8" }}>
                  <th className="text-left px-4 lg:px-6 py-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#9CA3AF" }}>Shift</th>
                  {daysOfWeek.map((d) => (
                    <th key={d} className="text-center px-2 py-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#9CA3AF" }}>{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shifts.map((shift) => (
                  <tr key={shift.id} className="hover:bg-gray-50" style={{ borderBottom: "1px solid #F9F8F5" }}>
                    <td className="px-4 lg:px-6 py-3">
                      <p className="font-semibold text-xs" style={{ color: "#1A2744" }}>{shift.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{shift.start_time}–{shift.end_time}</p>
                    </td>
                    {daysOfWeek.map((day) => (
                      <td key={day} className="px-2 py-3 text-center">
                        <div className="inline-block w-5 h-5 rounded-full" style={{ background: shift.days.includes(day) ? "#C4A35A" : "#F0EDE8" }} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
