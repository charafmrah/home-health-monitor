import Link from "next/link";

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
          <nav>
            <Link href="/">Dashboard</Link>
            <Link href="/account">Account</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
