import { User } from "@/types/user"
import axios from "axios";

export const LoginFunction = async(e: React.FormEvent, user: User) => {
    try {
        e.preventDefault();
        const { data } = await axios.post('/api/auth/login', {
            email: user.email,
            password: user.password
        });
        // console.log("Login Successful:", data);
        return data;
    } catch(error: any) {
        // console.error("Failed Request", error.message);
    }
};
