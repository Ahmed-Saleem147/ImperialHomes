"use client";
import { useState } from "react";
import { Search, Download } from "lucide-react";
import { attendanceRecords } from "@/lib/mock-data";
import TopBar from "@/components/top-bar";

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; color: string; label: string }> = {
    present: { bg: "#DCFCE7", color: "#16A34A", label: "PRESENT" },
    late: { bg: "#FEF3C7", color: "#D97706", label: "LATE" },
    absent: { bg: "#FEE2E2", color: "#DC2626", label: "ABSENT" },
  };
  const s = styles[status] ?? styles.absent;
  return (
    <span className="inline-block text-xs font-semibold px-2 py-1 rounded-md tracking-wider" style={{ background: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}

export default function RecordsPage() {
  const [query, setQuery] = useState("");

  const filtered = attendanceRecords.filter((r) => {
    const q = query.toLowerCase();
    return r.staff_name.toLowerCase().includes(q) || r.staff_id.toLowerCase().includes(q) || r.department.toLowerCase().includes(q) || r.date.includes(q);
  });

  const total = filtered.length;
  const present = filtered.filter((r) => r.status === "present").length;
  const late = filtered.filter((r) => r.status === "late").length;
  const absent = filtered.filter((r) => r.status === "absent").length;

  return (
    <>
      <TopBar role="management" name="Abena Mensah" initials="AM" />
      <div className="p-4 lg:p-8">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: "#1A2744" }}>Records</h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>Company-wide attendance records</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
          {[
            { label: "TOTAL", value: total, color: "#1A2744" },
            { label: "PRESENT", value: present, color: "#16A34A" },
            { label: "LATE", value: late, color: "#D97706" },
            { label: "ABSENT", value: absent, color: "#DC2626" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-4 lg:p-6 shadow-sm" style={{ border: "1px solid #F0EDE8" }}>
              <p className="text-3xl lg:text-4xl font-bold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs font-semibold tracking-widest mt-1" style={{ color: "#9CA3AF" }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#9CA3AF" }} />
            <input
              type="text"
              placeholder="Search by name, ID, department, or date..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm outline-none"
              style={{ background: "#F9F8F5", border: "1px solid #E5E2DB", color: "#1A2744" }}
            />
          </div>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
            style={{ background: "#1A2744", color: "white" }}
          >
            <Download className="w-4 h-4" /> Export
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ border: "1px solid #F0EDE8" }}>
          <div className="px-4 lg:px-6 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #F0EDE8" }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#9CA3AF" }}>Recent Records</span>
            <span className="text-xs" style={{ color: "#9CA3AF" }}>{filtered.length} records</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[580px]">
              <thead>
                <tr style={{ borderBottom: "1px solid #F0EDE8" }}>
                  {["Date", "Staff Member", "Department", "Status", "Source", "Marked At"].map((h) => (
                    <th key={h} className="text-left px-4 lg:px-6 py-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#9CA3AF" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50" style={{ borderBottom: "1px solid #F9F8F5" }}>
                    <td className="px-4 lg:px-6 py-3 font-medium text-xs lg:text-sm" style={{ color: "#1A2744" }}>{record.date}</td>
                    <td className="px-4 lg:px-6 py-3">
                      <p className="font-semibold text-xs lg:text-sm" style={{ color: "#C4A35A" }}>{record.staff_name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{record.staff_id}</p>
                    </td>
                    <td className="px-4 lg:px-6 py-3 text-xs lg:text-sm" style={{ color: "#6B7280" }}>{record.department}</td>
                    <td className="px-4 lg:px-6 py-3"><StatusBadge status={record.status} /></td>
                    <td className="px-4 lg:px-6 py-3 text-xs lg:text-sm" style={{ color: "#6B7280" }}>{record.source}</td>
                    <td className="px-4 lg:px-6 py-3 text-xs" style={{ color: "#6B7280" }}>{record.marked_at}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={6} className="px-6 py-12 text-center text-sm" style={{ color: "#9CA3AF" }}>No records match your search.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

