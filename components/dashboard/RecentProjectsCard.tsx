interface Project {
    name: string;
    timeOpened: string;
  }
  
  interface RecentProjectsCardProps {
    projects: Project[];
  }
  
  const RecentProjectsCard: React.FC<RecentProjectsCardProps> = ({ projects }) => {
    return (
      <div className="bg-[#18181a] text-white w-full h-full md:w-96 p-4 rounded-xl shadow-lg">
        {/* Header */}
        <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>
        
        {/* Project List */}
        <div className="max-h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#e71746] scrollbar-track-[#18181a]">
          <ul className="space-y-3">
            {projects.map((project, index) => (
              <li key={index} className="flex justify-between items-center bg-blue-600 p-3 rounded-lg">
                <span className="text-sm font-medium">{project.name}</span>
                <span className="text-xs text-[#edf7ff]">{project.timeOpened}</span>
              </li>
            ))}
          </ul>
        </div> 
      </div>
    );
  };
  
  export default RecentProjectsCard;
  


// ***Usage
// import RecentProjectsCard from "@/components/RecentProjectsCard";

// export default function Dashboard() {
//   const recentProjects = [
//     { name: "Landing Page Redesign", timeOpened: "15 mins ago" },
//     { name: "E-commerce API", timeOpened: "1 hour ago" },
//     { name: "Portfolio Website", timeOpened: "3 hours ago" },
//     { name: "Next.js Dashboard", timeOpened: "Yesterday" },
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <RecentProjectsCard projects={recentProjects} />
//     </div>
//   );
// }
