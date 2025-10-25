import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Footer from "./components/Footer";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <div
        className="fixed top-0 w-full min-h-screen -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
        }}
      />
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
}
