import Hero from "./hero/page";
import Socials from "./Socials/page";
import About from "./About/page";
import Stack from "./Stack/page";
import Project from "./Projects/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <div className="overflow-hidden">
    {/* <Header/> */}
    <Hero/>
    <Socials/>
    <Project/>
    <About/>
    <Contact/>
    <Stack/>
    {/* <Footer/> */}
    </div>
  );
}
