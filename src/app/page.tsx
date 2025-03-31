import NavegationBar from "./components/navegation-bar";
import AnnouncementBar from "./components/announcement-bar";
import Hero from "./components/hero";
import Divider from "./components/divider";
import Quote from "./components/quote";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-between h-screen text-center">
        <AnnouncementBar />
        <NavegationBar />
        <Hero />
        <Divider />
      </header>
      <main className="flex flex-col">
        <Quote />
        <Projects/>
      </main>
    </>
  );
}
