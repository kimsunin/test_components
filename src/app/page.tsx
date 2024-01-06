import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <hr />
      <h1>홈입니다</h1>
      <hr />
      <Footer />
    </div>
  );
}
