import Navbar from '@/components/general/navbar';
import Footer from '@/components/general/footer';
import SpotlightCard from '@/components/home_page/spotlightCard';
import { Icon } from '@iconify/react';


export default function Home() {
  return (
    <div className="w-full min-h-screen">

      {/* Hero Section with Background Video */}
      <section className="relative w-full min-h-screen md:h-[650px] flex items-center justify-start overflow-hidden">
        {/* Background Video (Confined to the section) */}
        <div className="absolute bg-black inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/images/greenrybg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Navbar (Independent from the section) */}
        <Navbar />

        {/* Content */}
        <div className="relative z-10 text-white px-6 md:px-[80px]">
          {/* Title Text */}
          <div className="text-[60px] md:text-[130px] font-bold leading-none font-serif">
            Quantity
            <span className="inline-block md:block md:-mt-[20px]">Edge</span>
          </div>
          
          {/* Buttons */}
          <div className="mt-3 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3"> 
            <button className="bg-white text-black hover:text-white hover:bg-black py-3 px-6 font-semibold rounded-full w-[200px] transition-colors">
              Get Started
            </button>
            <button className="text-white border border-white hover:text-black hover:bg-white py-3 px-6 font-semibold rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-[#2E2E2E] min-h-[800px] w-full flex flex-col items-center justify-center py-10">
        {/* Header */}
        <div className="text-center mb-10 px-6">
          <h1 className="text-[50px] font-bold font-serif text-white">
            We Take The Calculation Stress Off Your Hands
          </h1>
        </div>

        {/* Spotlight Cards */}
        <div className="flex  justify-center gap-6 px-20">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(214, 207, 225, 1)">
            <div><Icon icon="tabler:chart-bar" width="50" height="50" className="text-white" /></div>
            <h2 className="text-[20px] font-semibold mt-5 font-serif text-white">Efficient Cost Estimation</h2>
            <p className="text-gray-400 mt-2">
              Generate highly accurate and detailed Bills of Quantities with breakdowns for materials, 
              labor, and other expenses. Reduce errors and ensure precise cost forecasting for your projects.
            </p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card shadow-lg" spotlightColor="rgba(214, 207, 225, 1)">
            <div><Icon icon="tabler:calendar-week" width="50" height="50" className="text-white" /></div>
            <h2 className="text-xl font-semibold mt-5 font-serif text-white">Simplify Project Planning</h2>
            <p className="text-gray-400 mt-2">
              Organize and manage your construction projects with a well-structured BOQ. Plan resources, 
              set timelines, and track project phases to ensure smooth execution and timely completion.
            </p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(214, 207, 225, 1)">
            <div><Icon icon="tabler:moneybag" width="50" height="50" className="text-white" /></div>
            <h2 className="text-xl font-semibold mt-5 font-serif text-white">Stay on Budget</h2>
            <p className="text-gray-400 mt-2">
              Monitor and control project expenses with built-in budgeting tools. Compare estimated 
              vs actual costs, identify overspending, and make informed financial decisions.
            </p>
          </SpotlightCard>
        </div>
      </section>


      <Footer />
    </div>
  );
}
