"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex" style={{ background: "linear-gradient(135deg, #1A2744 0%, #243256 60%, #1A2744 100%)" }}>
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-14">
        {/* Logo pill */}
        <div
          className="inline-flex rounded-xl px-5 py-3 shadow-lg"
          style={{ background: "rgba(255,255,255,0.97)", width: "fit-content" }}
        >
          <Image
            src="/imperialhomesgh_logo.jpg"
            alt="Imperial Homes Ghana"
            width={160}
            height={55}
            className="object-contain"
            priority
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Smart Attendance<br />
            <span style={{ color: "#C4A35A" }}>Management</span><br />
            System
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Real-time biometric attendance tracking for Imperial Homes Ghana — powered by ZKTeco face recognition.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { label: "Staff Members", value: "55+" },
              { label: "Departments", value: "7" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
          © 2026 Imperial Homes Limited · A Signature Of Luxury
        </p>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-14">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-10">
            <div className="rounded-xl px-5 py-3 shadow-lg" style={{ background: "rgba(255,255,255,0.97)" }}>
              <Image
                src="/imperialhomesgh_logo.jpg"
                alt="Imperial Homes Ghana"
                width={140}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="rounded-2xl p-8 shadow-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
            <h2 className="text-2xl font-bold text-white mb-1">Welcome back</h2>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>Sign in to the Attendance Portal</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>Staff Email</label>
                <input
                  type="email"
                  placeholder="yourname@imperialhomesgh.com"
                  defaultValue="a.mensah@imperialhomesgh.com"
                  className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 outline-none"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="••••••••"
                    className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/management"
                className="flex items-center justify-center w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#C4A35A" }}
              >
                Sign in as Management / HR
              </Link>
              <Link
                href="/staff"
                className="flex items-center justify-center w-full py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}
              >
                Sign in as Staff Member
              </Link>
            </div>

            <p className="text-center text-xs mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>
              Forgot your password? Contact IT Support · ext. 007
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
