import Hero from "@/components/hero"
import About from "@/components/about"
import ResearchHighlights from "@/components/research-highlights"
import InstitutesDirectory from "@/components/institutes-directory"
import NewsEvents from "@/components/news-events"
import Footer from "@/components/footer"
import Header from "@/components/header"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <ScrollIndicator />
      <Header />
      <main>
        <Hero />
        <About />
        <ResearchHighlights />
        <InstitutesDirectory />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  )
}
