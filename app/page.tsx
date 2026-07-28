import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import Methodology from "@/components/Methodology";
import Instructor from "@/components/Instructor";
import YouTubeSection from "@/components/YouTubeSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCourses />
        <Methodology />
        <Instructor />
        <YouTubeSection />
        <Testimonials />
        <FAQ />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
