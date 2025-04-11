import connectDB from "@/lib/mongodb";
import User from "@/models/users";

export default async function handler(req, res) {
    // If Method To register isnt POST
    if (req.method !== "POST") return res.status(405).json({message: "Method Not Allowed!"});

    // Call Database
    await connectDB();

    // Body Data
    const { full_name, email, password } = req.body;

    // Check if user already exists
    const UserCheck = await User.findOne({ email });
    if (UserCheck) return res.status(404).json({message: "User Already Exists!"})
    
    // Save user to database
    const newUser = new User({ full_name, email, password });
    await newUser.save();

    // return
    return res.status(200).json({ message: "User Created Successfully"});
}
