"use client";
import { useState } from "react";
import { Search, Plus, Mail, Phone } from "lucide-react";
import { staffList } from "@/lib/mock-data";
import MobileHeader from "@/components/mobile-header";

export default function StaffPage() {
  const [query, setQuery] = useState("");

  const filtered = staffList.filter((s) => {
    const q = query.toLowerCase();
    return s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q) || s.department.toLowerCase().includes(q) || s.role.toLowerCase().includes(q);
  });

  return (
    <>
      <MobileHeader role="management" />
      <div className="p-4 lg:p-8">
        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: "#1A2744" }}>Staff</h1>
            <p className="text-sm mt-1" style={{ color: "#6B7280" }}>{staffList.length} staff members</p>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium shrink-0" style={{ background: "#C4A35A", color: "white" }}>
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#9CA3AF" }} />
          <input
            type="text"
            placeholder="Search by name, ID, department..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: "#F9F8F5", border: "1px solid #E5E2DB", color: "#1A2744" }}
          />
        </div>

        {/* Mobile cards view */}
        <div className="lg:hidden space-y-3">
          {filtered.map((s) => (
            <div key={s.id} className="bg-white rounded-xl p-4 shadow-sm" style={{ border: "1px solid #F0EDE8" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: "#1A2744" }}>
                  {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: "#1A2744" }}>{s.name}</p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>{s.role}</p>
                </div>
                <span className="text-xs font-mono font-semibold" style={{ color: "#C4A35A" }}>{s.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-md" style={{ background: "#F0EDE8", color: "#6B7280" }}>{s.department}</span>
                <span className="text-xs font-semibold px-2 py-1 rounded-md" style={{ background: "#DCFCE7", color: "#16A34A" }}>ACTIVE</span>
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "#9CA3AF" }}><Mail className="w-3 h-3" />{s.email}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden" style={{ border: "1px solid #F0EDE8" }}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid #F0EDE8" }}>
                  {["Staff ID", "Name", "Department", "Role", "Contact", "Status"].map((h) => (
                    <th key={h} className="text-left px-6 py-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#9CA3AF" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50" style={{ borderBottom: "1px solid #F9F8F5" }}>
                    <td className="px-6 py-4 font-mono text-xs font-semibold" style={{ color: "#C4A35A" }}>{s.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: "#1A2744" }}>
                          {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </div>
                        <span className="font-semibold" style={{ color: "#1A2744" }}>{s.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4" style={{ color: "#6B7280" }}>{s.department}</td>
                    <td className="px-6 py-4" style={{ color: "#6B7280" }}>{s.role}</td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: "#6B7280" }}><Mail className="w-3 h-3" />{s.email}</div>
                        <div className="flex items-center gap-1.5 text-xs" style={{ color: "#6B7280" }}><Phone className="w-3 h-3" />{s.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md" style={{ background: "#DCFCE7", color: "#16A34A" }}>ACTIVE</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {filtered.length === 0 && <p className="text-center py-12 text-sm" style={{ color: "#9CA3AF" }}>No staff match your search.</p>}
      </div>
    </>
  );
}
