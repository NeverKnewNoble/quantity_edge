import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import axios from "axios";

interface ProfileCardProps {
  name: string;
  image: string;
  gradientColor?: string; // Accepts Tailwind gradient colors (default: blue)
  onClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  image,
  gradientColor = "from-blue-600",
  onClick,
}) => {

  // !Fetch User Data
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get("/api/auth/me")
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);
    
  return (
    <div
      className="relative w-72 h-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer "
      onClick={onClick}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Bottom Gradient Effect */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t ${gradientColor} to-transparent`}
      ></div>

      {/* Text & Icon */}
      <div className="absolute bottom-0 left-0 w-full p-5 text-white flex justify-between items-center">
        <h3 className="text-[25px] font-semibold">{ user?.full_name }</h3>
        <div className="flex  items-center justify-end">
          <ArrowRight className="w-[40px] h-[40px] bg-blue-600 transition-transform hover:scale-105 text-white rounded-full p-1" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;




// **Usage
// import ProfileCard from "@/components/ProfileCard";

// export default function Home() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <ProfileCard
//         name="Daniel Johnson"
//         image="/images/daniel.jpg" // Replace with your image path
//         onClick={() => alert("Profile Clicked!")}
//       />
//     </div>
//   );
// }
