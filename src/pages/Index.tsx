
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnimationHelper } from "@/components/AnimationHelper";
import { NetflixHeroSection } from "@/components/sections/NetflixHeroSection";
import { NetflixAboutSection } from "@/components/sections/NetflixAboutSection";
import { NetflixSkillsSection } from "@/components/sections/NetflixSkillsSection";
import { NetflixProjectsSection } from "@/components/sections/NetflixProjectsSection";
import { NetflixExperienceSection } from "@/components/sections/NetflixExperienceSection";
import { NetflixCertificationsSection } from "@/components/sections/NetflixCertificationsSection";
import { NetflixContactSection } from "@/components/sections/NetflixContactSection";
import { NetflixFooter } from "@/components/NetflixFooter";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <NetflixHeroSection />
        <NetflixAboutSection />
        <NetflixSkillsSection />
        <NetflixProjectsSection />
        <NetflixExperienceSection />
        <NetflixCertificationsSection />
        <NetflixContactSection />
      </main>
      <NetflixFooter />
      <ScrollToTop />
      <AnimationHelper />
    </div>
  );
};

export default Index;
