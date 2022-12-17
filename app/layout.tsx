import Link from "next/link";
import Image from "next/image";
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
          <div className="flex items-center justify-between py-5 mb-3 ">
            <div className="flex items-center gap-5 font-semibold align-middle">
              <Image src="/logo.svg" width={50} height={50} alt="" />
              <h1>Home Health Monitor</h1>
            </div>
            <nav className="flex gap-5 text-2xl font-semibold align-middle ">
              <Link href="/">Dashboard</Link>
              <Link href="/account">Account</Link>
            </nav>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
