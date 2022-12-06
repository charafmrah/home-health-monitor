import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <nav className="flex gap-5">
            <Link href="/">Dashboard</Link>
            <Link href="/account">Account</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
