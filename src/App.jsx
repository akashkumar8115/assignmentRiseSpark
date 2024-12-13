import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MultiStepForm from "./components/MultiStepForm";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4 md:p-6 overflow-auto">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
};

export default App;
