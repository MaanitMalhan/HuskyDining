import { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) navigate("/");
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email.endsWith("@uconn.edu")) {
      toast.error("Only @uconn.edu email addresses are allowed.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "10px",
      }}
    >
      <Navbar />
      <Card
        className="shadow-lg p-5 w-100"
        style={{ maxWidth: "600px", borderRadius: "20px", background: "white" }}
      >
        <h1 className="text-center mb-4" style={{ color: "#4a47a3" }}>
          Create Your Account
        </h1>
        <p className="text-center text-muted mb-4">
          Join us and explore the best dining experiences!
        </p>
        <Form onSubmit={submitHandler}>
        <div className="mb-4">
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ borderRadius: "10px", padding: "10px" }}
            />
          </Form.Group>
        </div>

        <div className="mb-4">
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your @uconn.edu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "10px", padding: "10px" }}
            />
          </Form.Group>
        </div>

        <div className="mb-4">
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "10px", padding: "10px" }}
            />
          </Form.Group>
        </div>

        <div className="mb-4">
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ borderRadius: "10px", padding: "10px" }}
            />
          </Form.Group>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-100 mt-3"
          disabled={isLoading}
          style={{
            backgroundColor: "#8a86ff",
            border: "none",
            borderRadius: "10px",
            padding: "12px",
          }}
        >
          {isLoading ? "Registering..." : "Register Now"}
        </Button>
      </Form>

        <div className="text-center mt-4">
          <p className="text-muted">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#4a47a3" }}>
              Login here
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};