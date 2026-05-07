import TopProgressBar from "@/components/TopProgressBar";
import HeroSection from "@/components/HeroSection";
import CrossfadeSection from "@/components/CrossfadeSection";
import The6ixSection from "@/components/The6ixSection";
import DrakeSection from "@/components/DrakeSection";

export default function Page() {
  return (
    <main style={{ background: "#040202" }}>
      {/* Thin white progress line pinned at top */}
      <TopProgressBar />

      {/* ACT I — Toronto 初见，scale + 文字淡入 */}
      <HeroSection />

      {/* ACT II — 双图 Crossfade，冬日街头氛围 */}
      <CrossfadeSection />

      {/* ACT III — 巨型 "6"，The 6ix OVO 暗金调 */}
      <The6ixSection />

      {/* ACT IV — Drake，打字机文字 + 唱片卡片 */}
      <DrakeSection />
    </main>
  );
}
