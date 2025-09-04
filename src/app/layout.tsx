import { IconListProvider } from "./shared/iconListContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harold Kwan",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <IconListProvider>
          <div className="max-h-full overflow-y-scroll relative">
            <div className="max-w-350 mx-auto">{children}</div>
          </div>
        </IconListProvider>
      </body>
    </html>
  );
}
