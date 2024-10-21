import localFont from "next/font/local";
import "./globals.css";
import { Almarai } from 'next/font/google'
import Navbar from "./_components/header/navbar/page.jsx";



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



const almarai = Almarai({
  subsets: ['arabic'], // أو 'latin' حسب الحاجة
  weight: ['300', '400', '700', '800'], // تحديد الأوزان المتاحة
});






export const metadata = {
  title: "flooq",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${almarai.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}