import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">DashboardLayout</nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
