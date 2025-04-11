import { User } from "@/types/user";
import axios from "axios";


export const SignUpFunction = async (e: React.FormEvent, user: User) => {
  try {
    e.preventDefault();
    const { data } = await axios.post("/api/auth/register", user); 
    console.log("User Registered");

  } catch (err: any) {
    alert("Failed");
    console.error("Failed To Call", err.message);
  }
};
