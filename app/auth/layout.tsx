import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const NameLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default NameLayout;
