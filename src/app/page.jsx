import AboutUs from "./_components/aboutUs/page.jsx";
import Articles from "./_components/articles/page.jsx";
import Footer from "./_components/footer/page.jsx";
import Header from "./_components/header/page.jsx";
import News from "./_components/news/page.jsx";
import OurProjects from "./_components/projects/page.jsx";
import Services from "./_components/services/page.jsx";
import Testimonial from "./_components/testimonial/page.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <AboutUs />
      <OurProjects />
      <Testimonial />
      <Articles />
      <News />
      <Footer />
    </>
  );
}
