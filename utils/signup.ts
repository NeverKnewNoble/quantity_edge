import { User } from "@/types/user";
import axios from "axios";
// toast
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const SignUpFunction = async (e: React.FormEvent, user: User) => {
  const notyf = new Notyf({
    position: { x: 'right', y: 'top' },
    dismissible: true
  });


  try {
    e.preventDefault();
    const { data } = await axios.post("/api/auth/register", user); 
    // console.log("User Registered");
    notyf.success('User Registered.');

  } catch (err: any) {
    // console.error("Failed To Call", err.message);
    notyf.error('Oops! Registration Failed. Try again Later.');
  }
};
