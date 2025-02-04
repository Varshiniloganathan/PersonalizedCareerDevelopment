// App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Landing from "./pages/Landing";
import HomePage from "./pages/HomePage";
import UserProfile from "./components/UserProfile";
import Roadmap from "./pages/Roadmap";
import Skills from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ResumePage from "./pages/Resumes";
import Chatbot from "./pages/Chatbot";


export default function App() {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      // Save user data to MongoDB when authenticated
      axios
        .post("http://localhost:5000/saveUser", {
          name: user.name,
          email: user.email,
          picture: user.picture,
        })
        .then((response) => {
          console.log("User data saved:", response.data);
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
        });
    }
  }, [isAuthenticated, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/profile"
          element={
            isAuthenticated ? <UserProfile /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/roadmap"
          element={
            isAuthenticated ? <Roadmap /> : <Navigate to="/" replace />
          }
        />

        <Route
          path="/skills-required"
          element={
            isAuthenticated ? <Skills /> : <Navigate to="/" replace />
          }
        />

        <Route
          path="/project-ideas"
          element={
            isAuthenticated ? <ProjectsPage /> : <Navigate to="/" replace />
          }
        />


        <Route
          path="/resume-build"
          element={
            isAuthenticated ? <ResumePage /> : <Navigate to="/" replace />
          }
        />

        <Route
          path="/chatbot"
          element={
            isAuthenticated ? <Chatbot /> : <Navigate to="/" replace />
          }
        />
      </Routes>

    </BrowserRouter>
  );
}
