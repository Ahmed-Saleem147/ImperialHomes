import { departments, weeklyStats, attendanceRecords } from "@/lib/mock-data";
import { Users, TrendingUp, Clock, UserX, Building2 } from "lucide-react";
import TopBar from "@/components/top-bar";

function StatCard({ label, value, sub, icon: Icon, color }: { label: string; value: number | string; sub: string; icon: React.ElementType; color: string }) {
  return (
    <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm flex items-start gap-3" style={{ border: "1px solid #F0EDE8" }}>
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <div>
        <p className="text-xl lg:text-2xl font-bold" style={{ color: "#1A2744" }}>{value}</p>
        <p className="text-xs font-medium" style={{ color: "#6B7280" }}>{label}</p>
        <p className="text-xs mt-0.5 hidden sm:block" style={{ color: "#9CA3AF" }}>{sub}</p>
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  const today = attendanceRecords.filter((r) => r.date === "2026-07-02");
  const present = today.filter((r) => r.status === "present").length;
  const late = today.filter((r) => r.status === "late").length;
  const absent = today.filter((r) => r.status === "absent").length;
  const total = 55;
  const attendanceRate = Math.round((present / total) * 100);
  const maxBar = Math.max(...weeklyStats.map((d) => d.present + d.late + d.absent));

  return (
    <>
      <TopBar role="management" name="Abena Mensah" initials="AM" />
      <div className="p-4 lg:p-8">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: "#1A2744" }}>Analytics</h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>Wednesday, 2 July 2026</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
          <StatCard label="Total Staff" value={total} sub="All departments" icon={Users} color="#1A2744" />
          <StatCard label="Present" value={present} sub={`${attendanceRate}% rate`} icon={TrendingUp} color="#16A34A" />
          <StatCard label="Late" value={late} sub="After 8:30 AM" icon={Clock} color="#D97706" />
          <StatCard label="Absent" value={absent} sub="Unaccounted" icon={UserX} color="#DC2626" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
          {/* Weekly Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-4 lg:p-6 shadow-sm" style={{ border: "1px solid #F0EDE8" }}>
            <h2 className="text-sm font-semibold mb-4" style={{ color: "#1A2744" }}>Weekly Attendance</h2>
            <div className="flex items-end gap-2 h-32">
              {weeklyStats.map((day) => {
                const presentH = (day.present / maxBar) * 100;
                const lateH = (day.late / maxBar) * 100;
                const absentH = (day.absent / maxBar) * 100;
                const isToday = day.day === "Today";
                return (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col justify-end gap-0.5" style={{ height: "100px" }}>
                      <div className="w-full rounded-sm" style={{ height: `${absentH}%`, background: "#FEE2E2", minHeight: day.absent > 0 ? "3px" : "0" }} />
                      <div className="w-full rounded-sm" style={{ height: `${lateH}%`, background: "#FEF3C7", minHeight: day.late > 0 ? "3px" : "0" }} />
                      <div className="w-full rounded-sm" style={{ height: `${presentH}%`, background: isToday ? "#C4A35A" : "#DCFCE7", minHeight: day.present > 0 ? "3px" : "0" }} />
                    </div>
                    <span className="text-xs" style={{ color: isToday ? "#C4A35A" : "#9CA3AF", fontSize: "10px" }}>{day.day}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-3">
              {[{ color: "#DCFCE7", label: "Present" }, { color: "#FEF3C7", label: "Late" }, { color: "#FEE2E2", label: "Absent" }].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ background: l.color }} />
                  <span className="text-xs" style={{ color: "#9CA3AF" }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rate ring */}
          <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm flex flex-col" style={{ border: "1px solid #F0EDE8" }}>
            <h2 className="text-sm font-semibold mb-4" style={{ color: "#1A2744" }}>Today&apos;s Rate</h2>
            <div className="flex items-center gap-6 flex-1">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#F0EDE8" strokeWidth="2.5" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#C4A35A" strokeWidth="2.5"
                    strokeDasharray={`${attendanceRate} ${100 - attendanceRate}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: "#1A2744" }}>{attendanceRate}%</span>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Present", count: present, color: "#16A34A" },
                  { label: "Late", count: late, color: "#D97706" },
                  { label: "Absent", count: absent, color: "#DC2626" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3 text-sm">
                    <span style={{ color: "#6B7280" }}>{s.label}</span>
                    <span className="font-bold" style={{ color: s.color }}>{s.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Department table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ border: "1px solid #F0EDE8" }}>
          <div className="px-4 lg:px-6 py-4" style={{ borderBottom: "1px solid #F0EDE8" }}>
            <h2 className="text-sm font-semibold" style={{ color: "#1A2744" }}>Department Summary</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr style={{ borderBottom: "1px solid #F0EDE8" }}>
                  {["Department", "Total", "Present", "Late", "Absent", "Rate"].map((h) => (
                    <th key={h} className="text-left px-4 lg:px-6 py-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#9CA3AF" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => {
                  const rate = Math.round((dept.present / dept.staff_count) * 100);
                  return (
                    <tr key={dept.id} className="hover:bg-gray-50" style={{ borderBottom: "1px solid #F9F8F5" }}>
                      <td className="px-4 lg:px-6 py-3">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 shrink-0" style={{ color: "#C4A35A" }} />
                          <span className="font-medium text-xs lg:text-sm" style={{ color: "#1A2744" }}>{dept.name}</span>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-3 font-medium" style={{ color: "#1A2744" }}>{dept.staff_count}</td>
                      <td className="px-4 lg:px-6 py-3 font-semibold" style={{ color: "#16A34A" }}>{dept.present}</td>
                      <td className="px-4 lg:px-6 py-3 font-semibold" style={{ color: "#D97706" }}>{dept.late}</td>
                      <td className="px-4 lg:px-6 py-3 font-semibold" style={{ color: "#DC2626" }}>{dept.absent}</td>
                      <td className="px-4 lg:px-6 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full" style={{ background: "#F0EDE8" }}>
                            <div className="h-full rounded-full" style={{ width: `${rate}%`, background: rate >= 90 ? "#16A34A" : rate >= 75 ? "#D97706" : "#DC2626" }} />
                          </div>
                          <span className="text-xs font-medium" style={{ color: "#6B7280" }}>{rate}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

