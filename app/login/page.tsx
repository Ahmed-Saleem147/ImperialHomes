"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

// Management-level emails — in production this comes from Supabase user roles
const MANAGEMENT_EMAILS = new Set([
  "k.asante@imperialhomesgh.com",       // CEO
  "a.mensah@imperialhomesgh.com",        // HR Manager
  "k.boateng@imperialhomesgh.com",       // Sales Director
  "a.darko@imperialhomesgh.com",         // Finance Manager
  "y.osei@imperialhomesgh.com",          // Construction Manager
  "a.adjei@imperialhomesgh.com",         // Marketing Lead
  "k.amponsah@imperialhomesgh.com",      // IT Manager
  "e.asiedu@imperialhomesgh.com",        // Legal Counsel
  "n.acheampong@imperialhomesgh.com",    // Operations Manager
]);

// All valid staff emails
const ALL_EMAILS = new Set([
  ...MANAGEMENT_EMAILS,
  "a.boahene@imperialhomesgh.com",
  "k.frimpong@imperialhomesgh.com",
  "a.owusu@imperialhomesgh.com",
  "k.sarpong@imperialhomesgh.com",
  "e.quaye@imperialhomesgh.com",
  "f.aidoo@imperialhomesgh.com",
  "m.serwaa@imperialhomesgh.com",
  "k.annan@imperialhomesgh.com",
  "a.bonsu@imperialhomesgh.com",
]);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!ALL_EMAILS.has(email.toLowerCase().trim())) {
      setError("Email not recognised. Check with IT Support.");
      return;
    }

    if (password.length < 4) {
      setError("Incorrect password.");
      return;
    }

    setLoading(true);

    // Simulate a brief auth delay, then redirect based on role
    setTimeout(() => {
      if (MANAGEMENT_EMAILS.has(email.toLowerCase().trim())) {
        router.push("/management");
      } else {
        router.push("/staff");
      }
    }, 800);
  }

  return (
    <div className="min-h-screen flex" style={{ background: "linear-gradient(135deg, #1A2744 0%, #243256 60%, #1A2744 100%)" }}>
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-14">
        <div className="inline-flex rounded-xl px-5 py-3 shadow-lg" style={{ background: "rgba(255,255,255,0.97)", width: "fit-content" }}>
          <Image src="/imperialhomesgh_logo.jpg" alt="Imperial Homes Ghana" width={160} height={55} className="object-contain" priority />
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

        <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>© 2026 Imperial Homes Limited · A Signature Of Luxury</p>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-14">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="rounded-xl px-5 py-3 shadow-lg" style={{ background: "rgba(255,255,255,0.97)" }}>
              <Image src="/imperialhomesgh_logo.jpg" alt="Imperial Homes Ghana" width={140} height={48} className="object-contain" priority />
            </div>
          </div>

          <form
            onSubmit={handleLogin}
            className="rounded-2xl p-8 shadow-2xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}
          >
            <h2 className="text-2xl font-bold text-white mb-1">Welcome back</h2>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>Sign in to the Attendance Portal</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>Staff Email</label>
                <input
                  type="email"
                  placeholder="yourname@imperialhomesgh.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 outline-none"
                  style={{ background: "rgba(255,255,255,0.08)", border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.15)"}` }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.15)"}` }}
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

            {/* Error message */}
            {error && (
              <p className="mt-3 text-sm text-red-400 flex items-center gap-1.5">
                <span>⚠</span> {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex items-center justify-center w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ background: "#C4A35A" }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Signing in...
                </>
              ) : "Sign In"}
            </button>

            <p className="text-center text-xs mt-6" style={{ color: "rgba(255,255,255,0.3)" }}>
              Forgot your password? Contact IT Support · ext. 007
            </p>
          </form>

          {/* Demo hint */}
          <div className="mt-4 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>DEMO CREDENTIALS</p>
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => { setEmail("a.mensah@imperialhomesgh.com"); setPassword("password123"); setError(""); }}
                className="w-full text-left text-xs px-3 py-2 rounded-lg transition-colors hover:bg-white/5"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span style={{ color: "#C4A35A" }}>Management:</span> a.mensah@imperialhomesgh.com
              </button>
              <button
                type="button"
                onClick={() => { setEmail("k.frimpong@imperialhomesgh.com"); setPassword("password123"); setError(""); }}
                className="w-full text-left text-xs px-3 py-2 rounded-lg transition-colors hover:bg-white/5"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <span style={{ color: "rgba(255,255,255,0.6)" }}>Staff:</span> k.frimpong@imperialhomesgh.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
