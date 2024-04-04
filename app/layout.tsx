import { Metadata } from "next"
import "../styles/globals.css";
export const metadata: Metadata = {
  title: 'Innenanzeiger',
}
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" >
        <link rel="icon" href="/logo/logo.svg" />
        <body>
          {/* Layout UI */}
          <div className="__innenanzeiger" >{children}</div>
        </body>
      </html>
    )
  }