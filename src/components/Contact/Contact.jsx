import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Validation Function
  const validate = (name, value) => {
    let error = "";

    if (name === "name" && value.trim().length < 3) {
      error = "Name must be at least 3 characters";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Invalid email format";
      }
    }

    if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters";
    }

    if (name === "confirmPassword" && value !== form.password) {
      error = "Passwords do not match";
    }

    return error;
  };

  // ✅ Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    const errorMessage = validate(name, value);
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  // ✅ Check if form valid
  const isFormValid =
    Object.values(errors).every((err) => err === "") &&
    Object.values(form).every((field) => field !== "");

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      alert(data.message);
      setSubmittedData(form);

      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert("Email sending failed");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2>Contacts Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <span style={styles.error}>{errors.name}</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <span style={styles.error}>{errors.email}</span>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <span style={styles.error}>{errors.password}</span>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <span style={styles.error}>{errors.confirmPassword}</span>

        <button type="submit" disabled={!isFormValid || loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {/* ✅ Submitted Data Card */}
      {submittedData && (
        <div style={styles.card}>
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  card: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #4CAF50",
    borderRadius: "8px",
    backgroundColor: "#f0fff0",
  },
};

export default Contact;