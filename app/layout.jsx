import Nav from "@/components/Nav";
import "./globals.css";
export const metadata = {
  title: "Sara Temraz",
  description: "Welcome to my portfolio",
  icons: {
    icon: ["/favicon-32x32.png"],
    apple: "/favicon-32x32.png", 
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
