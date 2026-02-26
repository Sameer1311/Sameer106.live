import Hero from "./hero/page";
import Socials from "./Socials/page";
import About from "./About/page";
import Stack from "./Stack/page";
import Project from "./Projects/page";
import Contact from "./Contact/page";
import Experience from "./Expreince/page"

export default function Home() {
  return (
    <div className="overflow-hidden">
    {/* <Header/> */}
    <Hero/>
    <Socials/>
      <Experience/>
    <Project/>
    <About/>
    <Contact/>
    <Stack/>
    {/* <Footer/> */}
    </div>
  );
}
