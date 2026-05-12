import TopProgressBar from "@/components/TopProgressBar";
import HeroSection from "@/components/HeroSection";
import IntroTransition from "@/components/IntroTransition";
import PhotoStoryGallery from "@/components/PhotoStoryGallery";
import CityQuotes from "@/components/CityQuotes";
import DrakeNarrative from "@/components/DrakeNarrative";
import EndingFadeOut from "@/components/EndingFadeOut";
import AITerminal from "@/components/AITerminal";

export default function Page() {
  return (
    <main>
      <TopProgressBar />
      <HeroSection />
      <IntroTransition />
      <PhotoStoryGallery />
      <CityQuotes />
      <DrakeNarrative />
      <EndingFadeOut />
      <AITerminal />
    </main>
  );
}
