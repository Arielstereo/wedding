import { Kanit} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavMobile from "./components/NavMobile";

const font = Kanit({
  subsets: ["latin"],
  weight: "400",
});


export const metadata = {
  title: "Wedding App | Nuestra Boda",
  description: "Web de ejemplo para una boda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased relative`}>
        <Navbar />
        <NavMobile />
        {children}
      </body>
    </html>
  );
}
