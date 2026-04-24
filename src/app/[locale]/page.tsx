import { SiteShell } from "@/components/layout/site-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { GitHubActivitySection } from "@/components/sections/github-activity-section";
import { IntroSection } from "@/components/sections/intro-section";
import { NowSection } from "@/components/sections/now-section";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { SectionContainer } from "@/components/sections/section-container";
import { SkillsSection } from "@/components/sections/skills-section";
import { getFeaturedProjects } from "@/data/projects";
import { getSiteContent, resolveLocale } from "@/data/site";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;
  const locale = resolveLocale(localeParam);
  const site = getSiteContent(locale);
  const featuredProjects = getFeaturedProjects(locale);

  return (
    <SiteShell locale={locale} dictionary={site.dictionary}>
      <SectionContainer id="intro" title={site.dictionary.nav.intro} eyebrow="Home" variant="hero">
        <IntroSection profile={site.profile} featuredProject={featuredProjects[0]} />
      </SectionContainer>

      <SectionContainer id="contact" title="Contact" eyebrow="Direct reach">
        <ContactSection socials={site.socials} />
      </SectionContainer>

      <SectionContainer
        id="projects"
        title={site.dictionary.nav.projects}
        eyebrow={site.dictionary.labels.featuredProjects}
      >
        <ProjectsPreviewSection
          locale={locale}
          projects={featuredProjects}
          dictionary={site.dictionary}
        />
      </SectionContainer>

      <SectionContainer
        id="github-activity"
        title={site.dictionary.labels.githubActivity}
        eyebrow="Mock-ready data"
      >
        <GitHubActivitySection
          snapshot={site.githubActivity}
          title={site.dictionary.labels.githubActivity}
        />
      </SectionContainer>

      <SectionContainer id="experiences" title={site.dictionary.nav.experiences} eyebrow="Timeline">
        <ExperiencesSection items={site.experiences} />
      </SectionContainer>

      <SectionContainer id="skills" title={site.dictionary.nav.skills} eyebrow="Capabilities">
        <SkillsSection groups={site.skills} />
      </SectionContainer>

      <SectionContainer id="now" title={site.dictionary.nav.now} eyebrow="Current status">
        <NowSection items={site.now} />
      </SectionContainer>

      <SectionContainer id="resume" title={site.dictionary.nav.resume} eyebrow="Handoff">
        <ResumeSection resume={site.resume} />
      </SectionContainer>
    </SiteShell>
  );
}
