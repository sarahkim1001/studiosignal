import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-20">
      {children}
    </div>
  );
}
