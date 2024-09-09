import ShimmerButton from '@/components/magicui/shimmer-button'
import ShineBorder from '@/components/magicui/shine-border'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Add the new text above the video */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h2>
        <p>Schedule a discovery call with our AI experts and unlock your company's potential.</p>
      </div>

      {/* Our Process box with ShineBorder effect */}
      <ShineBorder
        borderRadius={12}
        borderWidth={2}
        duration={10}
        color={["#4F46E5", "#13B5C8"]}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold">Our Process</h3>
      </ShineBorder>

      {/* Video component */}
      <Video />

      {/* Center the button and apply ShimmerButton design */}
      <div className="mt-8 flex justify-center">
        <ShimmerButton>Book Discovery Call Now</ShimmerButton>
      </div>

      // ... rest of the existing code ...
    </main>
  )
}