import { departments } from "@/lib/mock-data";
import { Building2, Users } from "lucide-react";
import MobileHeader from "@/components/mobile-header";

export default function DepartmentsPage() {
  return (
    <>
      <MobileHeader role="management" />
      <div className="p-4 lg:p-8">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: "#1A2744" }}>Departments</h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>Attendance breakdown by department</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {departments.map((dept) => {
            const rate = Math.round((dept.present / dept.staff_count) * 100);
            const rateColor = rate >= 90 ? "#16A34A" : rate >= 75 ? "#D97706" : "#DC2626";
            return (
              <div key={dept.id} className="bg-white rounded-xl p-5 shadow-sm" style={{ border: "1px solid #F0EDE8" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(196,163,90,0.12)" }}>
                      <Building2 className="w-4 h-4" style={{ color: "#C4A35A" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm" style={{ color: "#1A2744" }}>{dept.name}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>Head: {dept.head}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold" style={{ color: rateColor }}>{rate}%</span>
                </div>
                <div className="h-1.5 rounded-full mb-4" style={{ background: "#F0EDE8" }}>
                  <div className="h-full rounded-full" style={{ width: `${rate}%`, background: rateColor }} />
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { label: "Total", value: dept.staff_count, color: "#1A2744" },
                    { label: "Present", value: dept.present, color: "#16A34A" },
                    { label: "Late", value: dept.late, color: "#D97706" },
                    { label: "Absent", value: dept.absent, color: "#DC2626" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg py-2" style={{ background: "#F9F8F5" }}>
                      <p className="text-base font-bold" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-xs" style={{ color: "#9CA3AF" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs" style={{ color: "#9CA3AF" }}>
                  <Users className="w-3.5 h-3.5" />{dept.staff_count} staff members
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
