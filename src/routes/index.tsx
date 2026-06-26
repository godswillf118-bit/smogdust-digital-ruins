import { createFileRoute } from "@tanstack/react-router";
import { Atmosphere } from "@/components/smogdust/Atmosphere";
import { ScrollProgress, CursorGlow } from "@/components/smogdust/Effects";
import { Navbar } from "@/components/smogdust/Navbar";
import { Hero } from "@/components/smogdust/Hero";
import { About } from "@/components/smogdust/About";
import { Collection } from "@/components/smogdust/Collection";
import { Lore } from "@/components/smogdust/Lore";
import { WalletChecker } from "@/components/smogdust/WalletChecker";
import { Whitelist } from "@/components/smogdust/Whitelist";
import { Roadmap } from "@/components/smogdust/Roadmap";
import { Community } from "@/components/smogdust/Community";
import { Footer } from "@/components/smogdust/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMOGDUST — Tiny Creatures. Big Collections." },
      {
        name: "description",
        content:
          "SMOGDUST: 4,444 forgotten creatures born from abandoned blockchain code. Explore the lore, the collection, and join the Cleanup Crew. We clean what others forget.",
      },
      { property: "og:title", content: "SMOGDUST — Tiny Creatures. Big Collections." },
      {
        property: "og:description",
        content: "4,444 forgotten creatures roaming the ruins of an ancient blockchain.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SMOGDUST",
          description:
            "A collection of 4,444 tiny creatures born from forgotten blockchain code.",
          publisher: { "@type": "Organization", name: "SMOGDUST" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Atmosphere />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Collection />
        <Lore />
        <Roadmap />
        <WalletChecker />
        <Whitelist />
        <Community />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
