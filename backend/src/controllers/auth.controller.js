export const signup = async (req, res) => {
  const {fullName, email, password } = req.body;

  try{
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required "});
    }

    if (password.length < 6 ) {
        return res.status(400).json({ message: " Password must be atleat 6 characters "});
    }

    //check if email is valid: using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Please provide a valid email address "});
    }

    //
  } catch (error) {}
} 