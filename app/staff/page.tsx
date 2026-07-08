import { attendanceRecords } from "@/lib/mock-data";
import { TrendingUp, Clock, UserX, CheckCircle2 } from "lucide-react";
import TopBar from "@/components/top-bar";

const myRecords = attendanceRecords.filter((r) => r.staff_id === "IH003");

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    present: { bg: "#DCFCE7", color: "#16A34A", label: "PRESENT" },
    late: { bg: "#FEF3C7", color: "#D97706", label: "LATE" },
    absent: { bg: "#FEE2E2", color: "#DC2626", label: "ABSENT" },
  };
  const s = map[status] ?? map.absent;
  return (
    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider" style={{ background: s.bg, color: s.color }}>{s.label}</span>
  );
}

export default function StaffDashboard() {
  const present = myRecords.filter((r) => r.status === "present").length;
  const late = myRecords.filter((r) => r.status === "late").length;
  const absent = myRecords.filter((r) => r.status === "absent").length;
  const rate = myRecords.length > 0 ? Math.round((present / myRecords.length) * 100) : 0;

  return (
    <>
      <TopBar role="staff" name="Kofi Boateng" initials="KB" />
      <div className="p-4 lg:p-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: "#C4A35A" }}>
              KB
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold" style={{ color: "#1A2744" }}>Good morning, Kofi</h1>
              <p className="text-xs lg:text-sm" style={{ color: "#6B7280" }}>Sales Director Â· IH003</p>
            </div>
          </div>
          <p className="text-sm mt-2 ml-13" style={{ color: "#9CA3AF" }}>Wednesday, 2 July 2026</p>
        </div>

        {/* Clock-in status */}
        <div className="rounded-xl p-4 lg:p-6 mb-5 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #1A2744, #243256)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <CheckCircle2 className="w-8 h-8 shrink-0" style={{ color: "#C4A35A" }} />
          <div>
            <p className="text-white font-bold text-sm lg:text-base">Clocked in today</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
              8:12:34 AM Â· ZKTeco Â· <span style={{ color: "#86EFAC" }}>Present</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-5">
          {[
            { label: "Days Logged", value: myRecords.length, icon: TrendingUp, color: "#1A2744" },
            { label: "Present", value: present, icon: CheckCircle2, color: "#16A34A" },
            { label: "Late", value: late, icon: Clock, color: "#D97706" },
            { label: "Absent", value: absent, icon: UserX, color: "#DC2626" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm" style={{ border: "1px solid #F0EDE8" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-2" style={{ background: `${s.color}18` }}>
                <s.icon className="w-3.5 h-3.5" style={{ color: s.color }} />
              </div>
              <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-4 lg:p-6 mb-5 shadow-sm" style={{ border: "1px solid #F0EDE8" }}>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold" style={{ color: "#1A2744" }}>My Attendance Rate</h2>
            <span className="text-xl font-bold" style={{ color: rate >= 90 ? "#16A34A" : "#D97706" }}>{rate}%</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: "#F0EDE8" }}>
            <div className="h-full rounded-full" style={{ width: `${rate}%`, background: rate >= 90 ? "#16A34A" : "#D97706" }} />
          </div>
          <p className="text-xs mt-1.5" style={{ color: "#9CA3AF" }}>Based on {myRecords.length} logged days</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ border: "1px solid #F0EDE8" }}>
          <div className="px-4 py-3" style={{ borderBottom: "1px solid #F0EDE8" }}>
            <h2 className="text-sm font-semibold" style={{ color: "#1A2744" }}>Recent Attendance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr style={{ borderBottom: "1px solid #F0EDE8" }}>
                  {["Date", "Status", "Source", "Clock-in"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#9CA3AF" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {myRecords.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50" style={{ borderBottom: "1px solid #F9F8F5" }}>
                    <td className="px-4 py-3 font-medium text-xs" style={{ color: "#1A2744" }}>{r.date}</td>
                    <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                    <td className="px-4 py-3 text-xs" style={{ color: "#6B7280" }}>{r.source}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: "#6B7280" }}>{r.marked_at}</td>
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

