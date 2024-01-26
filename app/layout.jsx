import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BRAINDSCAPE",
  description: "Lo que tu mente olvida, nosotros lo recordamos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="container mx-auto px-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
