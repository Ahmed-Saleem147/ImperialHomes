import StaffSidebar from "@/components/staff-sidebar";
import StaffMobileNav from "@/components/staff-mobile-nav";

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#F5F5F0" }}>
      <div className="hidden lg:flex">
        <StaffSidebar />
      </div>
      <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">{children}</main>
      <StaffMobileNav />
    </div>
  );
}
