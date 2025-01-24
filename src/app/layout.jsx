import { Kanit} from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
