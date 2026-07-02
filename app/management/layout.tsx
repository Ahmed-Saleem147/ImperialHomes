import ManagementSidebar from "@/components/management-sidebar";
import ManagementMobileNav from "@/components/management-mobile-nav";

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#F5F5F0" }}>
      <div className="hidden lg:flex">
        <ManagementSidebar />
      </div>
      <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
        {children}
      </main>
      <ManagementMobileNav />
    </div>
  );
}
