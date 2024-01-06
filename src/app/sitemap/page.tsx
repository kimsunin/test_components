import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function SiteMap() {
  const props = {
    parent: { url: "/sitemap", title: "사이트맵" },
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <Nav props={props} />
      </nav>
      <hr />
      <main>
        <h1>사이트맵 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
