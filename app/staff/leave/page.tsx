"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function LeaveRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ type: "Annual Leave", from: "", to: "", reason: "" });

  if (submitted) {
    return (
      <div className="p-8 flex flex-col items-center justify-center min-h-96">
        <CheckCircle2 className="w-16 h-16 mb-4" style={{ color: "#16A34A" }} />
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#1A2744" }}>Request Submitted!</h2>
        <p className="text-sm text-center mb-6" style={{ color: "#6B7280" }}>
          Your leave request has been sent to HR for approval. You will be notified once it is reviewed.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ type: "Annual Leave", from: "", to: "", reason: "" }); }}
          className="px-5 py-2.5 rounded-lg text-sm font-medium"
          style={{ background: "#1A2744", color: "white" }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#1A2744" }}>Request Leave</h1>
        <p className="text-sm mt-1" style={{ color: "#6B7280" }}>Submit a leave request for HR approval</p>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm max-w-lg" style={{ border: "1px solid #F0EDE8" }}>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "#1A2744" }}>Leave Type</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none"
              style={{ background: "#F9F8F5", border: "1px solid #E5E2DB", color: "#1A2744" }}
            >
              <option>Annual Leave</option>
              <option>Sick Leave</option>
              <option>Emergency Leave</option>
              <option>Maternity / Paternity Leave</option>
              <option>Study Leave</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1A2744" }}>From</label>
              <input
                type="date"
                value={form.from}
                onChange={(e) => setForm({ ...form, from: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{ background: "#F9F8F5", border: "1px solid #E5E2DB", color: "#1A2744" }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1A2744" }}>To</label>
              <input
                type="date"
                value={form.to}
                onChange={(e) => setForm({ ...form, to: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{ background: "#F9F8F5", border: "1px solid #E5E2DB", color: "#1A2744" }}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "#1A2744" }}>Reason</label>
            <textarea
              rows={4}
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              placeholder="Briefly describe the reason for your leave..."
              className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
              style={{ background: "#F9F8F5", border: "1px solid #E5E2DB", color: "#1A2744" }}
            />
          </div>
          <button
            onClick={() => form.from && form.to && form.reason && setSubmitted(true)}
            className="w-full py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "#1A2744", color: "white" }}
          >
            Submit Leave Request
          </button>
        </div>
      </div>
    </div>
  );
}
