import BlurText from "@/components/general/loadingeffect";

export default function Loading() {
  return (
    <div className="flex items-center bg-[#18181a] justify-center min-h-screen">
      <BlurText
        text="Quantity Edge"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      />
    </div>
  );
}