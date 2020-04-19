import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <>{children}</>
      <div style={{ backgroundColor: "#fafafa" }}>
        <Footer />
      </div>
    </>
  );
}
