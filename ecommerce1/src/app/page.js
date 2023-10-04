import Navbar from "@/Components/Navbar";
import Homes from "./pages/Landing/Homes";
import Footer from "@/Components/Footer";
import Womens from "./pages/Womens/Womens";
export default function Home() {
  return (
    <>
      <Navbar />
      <Homes />
      <Womens />
      <Footer />
    </>
  );
}
