import "./globals.scss";
import { Cairo } from "next/font/google";
import Providers from "@/components/Providers";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Refilex Software Company | Web & Mobile App Development",
  description:
    "Refilex, a software development company based in Egypt that offers web and mobile app development, website development, e-commerce development, web hosting, and server security services",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* <link rel="shortcut icon" href="https://refilex.com/wp-content/uploads/2022/04/profile@300x.png" /> */}
        <link rel="icon" type="image/x-icon" href="https://refilex.com/wp-content/uploads/2022/04/profile@300x.png"/>
      </head>
      <body className={`${cairo.className} transition-all ease-in`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
