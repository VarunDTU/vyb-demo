import localFont from "next/font/local";
import Navbar from "./components/navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Varun Negi",
  description: "Varun Negi Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="[&::-webkit-scrollbar]:hidden">
      <body className={`${geistSans.variable} ${geistMono.variable}  `}>
        <div className="p-5 font-urbanist  py-[36px] px-[120px] ">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
