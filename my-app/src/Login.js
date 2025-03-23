import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group password-group">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "🔒"}
          </span>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="links">
        <a href="/#" className="forgot-password-link">
          Forgot password?
        </a>
        <br />
        <a href="/#" className="signup-link">
          Create a new account
        </a>
      </div>

      <button type="button" className="btn-login">
        Login
      </button>
    </form>
  );
};

export default Login;
