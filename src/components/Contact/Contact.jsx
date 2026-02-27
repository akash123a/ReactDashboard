import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // 🔍 Validation function
  const validate = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Name is required";
      else if (value.length < 3)
        error = "Name must be at least 3 characters";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) error = "Email is required";
      else if (!emailRegex.test(value))
        error = "Invalid email format";
    }

    if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6)
        error = "Password must be at least 6 characters";
    }

    if (name === "confirmPassword") {
      if (!value) error = "Confirm your password";
      else if (value !== form.password)
        error = "Passwords do not match";
    }

    return error;
  };

  // 📝 Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  // ✅ Check if form valid
  const isFormValid =
    form.name &&
    form.email &&
    form.password &&
    form.confirmPassword &&
    Object.values(errors).every((err) => err === "");

  // 📩 Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Email sent successfully 🎉");
        setForm({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("Email sending failed ❌");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-2"
          value={form.name}
          onChange={handleChange}
        />
        <small className="text-danger">{errors.name}</small>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          value={form.email}
          onChange={handleChange}
        />
        <small className="text-danger">{errors.email}</small>

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          value={form.password}
          onChange={handleChange}
        />
        <small className="text-danger">{errors.password}</small>

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-control mb-2"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <small className="text-danger">
          {errors.confirmPassword}
        </small>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={!isFormValid || loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {success && (
          <div className="alert alert-success mt-3">
            {success}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;