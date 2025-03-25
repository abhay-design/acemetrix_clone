import { Poppins } from "next/font/google";
import Banner from "../components/banner";
import Blog from "../components/blog";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Banner />
      <Blog />
    </main>
  );
}
