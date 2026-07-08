"use client";
import { useState } from "react";
import { leaveRequests } from "@/lib/mock-data";
import { Check, X } from "lucide-react";
import TopBar from "@/components/top-bar";

type Leave = typeof leaveRequests[number] & { status: string };

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    pending: { bg: "#FEF3C7", color: "#D97706", label: "PENDING" },
    approved: { bg: "#DCFCE7", color: "#16A34A", label: "APPROVED" },
    denied: { bg: "#FEE2E2", color: "#DC2626", label: "DENIED" },
  };
  const s = map[status] ?? map.pending;
  return (
    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider" style={{ background: s.bg, color: s.color }}>{s.label}</span>
  );
}

export default function LeaveRequestsPage() {
  const [requests, setRequests] = useState<Leave[]>(leaveRequests as Leave[]);
  const update = (id: number, status: string) => setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  const pending = requests.filter((r) => r.status === "pending").length;

  return (
    <>
      <TopBar role="management" name="Abena Mensah" initials="AM" />
      <div className="p-4 lg:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: "#1A2744" }}>Leave Requests</h1>
            <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
              {pending > 0 ? `${pending} awaiting approval` : "All processed"}
            </p>
          </div>
          {pending > 0 && (
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white" style={{ background: "#D97706" }}>{pending}</span>
          )}
        </div>

        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req.id} className="bg-white rounded-xl p-4 lg:p-6 shadow-sm" style={{ border: "1px solid #F0EDE8" }}>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: "#1A2744" }}>
                  {req.staff_name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-sm" style={{ color: "#1A2744" }}>{req.staff_name}</p>
                    <StatusBadge status={req.status} />
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>{req.department} Â· {req.staff_id}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg p-2.5" style={{ background: "#F9F8F5" }}>
                  <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#9CA3AF" }}>Type</p>
                  <p className="text-xs font-semibold" style={{ color: "#1A2744" }}>{req.type}</p>
                </div>
                <div className="rounded-lg p-2.5" style={{ background: "#F9F8F5" }}>
                  <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#9CA3AF" }}>Period</p>
                  <p className="text-xs font-semibold" style={{ color: "#1A2744" }}>{req.from} â†’ {req.to}</p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>{req.days} day{req.days > 1 ? "s" : ""}</p>
                </div>
                <div className="rounded-lg p-2.5 col-span-2 sm:col-span-1" style={{ background: "#F9F8F5" }}>
                  <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#9CA3AF" }}>Submitted</p>
                  <p className="text-xs font-semibold" style={{ color: "#1A2744" }}>{req.submitted}</p>
                </div>
              </div>

              <p className="text-xs italic mb-3" style={{ color: "#6B7280" }}>&ldquo;{req.reason}&rdquo;</p>

              {req.status === "pending" && (
                <div className="flex gap-2">
                  <button onClick={() => update(req.id, "approved")}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: "#DCFCE7", color: "#16A34A" }}>
                    <Check className="w-3.5 h-3.5" /> Approve
                  </button>
                  <button onClick={() => update(req.id, "denied")}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: "#FEE2E2", color: "#DC2626" }}>
                    <X className="w-3.5 h-3.5" /> Deny
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

