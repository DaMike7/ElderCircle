// pages/SignupPage.js
import { useState } from "react";
import axios from "axios";
import PersonaVerification from "../components/PersonaVerification";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    inquiryId: "",
    dob: ""
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVerificationComplete = ({ inquiryId, dob }) => {
    setForm(prev => ({ ...prev, inquiryId, dob }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace this URL with your actual backend API endpoint
      const response = await axios.post("https://your-backend.com/api/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
        inquiryId: form.inquiryId,
        dob: form.dob,
      });

      console.log("✅ Signup success:", response.data);
    } catch (err) {
      console.error("❌ Signup error:", err.response?.data || err.message);
    }
  };

  return (
    
  );
};

export default SignupPage;