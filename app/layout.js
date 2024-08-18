import { Roboto_Mono, McLaren } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Provider from "./provider";
import Footer from "@/components/footer/Footer";

const inter = McLaren({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "ShopLite - Your One-Stop Online Shop",
  description:
    "Discover the best deals on electronics, fashion, home goods, and more at ShopLite. Shop with confidence and enjoy fast shipping and easy returns.",
  keywords:
    "ShopLite, e-commerce, online shopping, electronics, fashion, home goods, deals, discounts",
  author: "ShopLite Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
