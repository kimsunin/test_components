import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function Mypage() {
  const props = {
    parent: { url: "/mypage", title: "마이페이지" },
    child1: { url: "/mypage/child1", title: "마이페이지1" },
    child2: { url: "/mypage/child2", title: "마이페이지2" },
    child3: { url: "/mypage/child3", title: "마이페이지3" },
    child4: { url: "/mypage/child4", title: "마이페이지4" },
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
        <h1>마이페이지 자식4 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
