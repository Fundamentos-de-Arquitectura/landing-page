import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main>
                <section id="hero">
                    <Hero />
                </section>

                <section id="features">
                    <Features />
                </section>

                <section id="pricing">
                    <Stats />
                </section>

                <section id="contact">
                    <CTA />
                </section>
            </main>
            <Footer />
        </div>
    );
}