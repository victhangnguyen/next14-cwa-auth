import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav className="bg-red-500 text-white">This is navbar without / auth prefix</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
