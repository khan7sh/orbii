import HeroSection from '@/components/HeroSection';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="relative py-16">
        <HeroVideoDialog
          videoSrc="https://www.youtube.com/embed/GTIFPFqbB8c"
          thumbnailSrc="https://img.youtube.com/vi/GTIFPFqbB8c/maxresdefault.jpg"
          className="max-w-4xl mx-auto"
        />
      </section>
      {/* Other sections */}
    </main>
  );
}