import localFont from "next/font/local";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "@/utils/Context";


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

const urduFont = Noto_Nastaliq_Urdu({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-urdu",
});

export const metadata = {
  title: "Shabab - Trusted Herbal Medicine Provider",
  description:
    "Shabab offers a wide range of herbal medicines and natural health remedies to promote wellness and vitality. Explore our organic treatments for a healthier lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${urduFont.variable} antialiased`}>
      <AuthProvider>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
    </AuthProvider>
      </body>
    </html>
  );
}
