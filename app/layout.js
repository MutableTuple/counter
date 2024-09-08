import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "counterr",
  description: "Counter for your apps!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
