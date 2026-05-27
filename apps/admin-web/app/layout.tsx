import type { ReactNode } from "react";
import "./styles.css";

export const metadata = {
  title: "Save Box Admin",
  description: "Admin dashboard for Neighborhood Save Box",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

