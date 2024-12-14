import React from "react";
import { BsCheck, BsClock } from 'react-icons/bs';
import { motion } from "framer-motion";
import "./Stepper.css";

const steps = [
    { id: 1, label: "Preliminary", estimatedTime: "2 min" },
    { id: 2, label: "Details", remestimatedTime: "3 min" },
    { id: 3, label: "KYC", estimatedTime: "5 min" },
    { id: 4, label: "Parties", estimatedTime: "4 min" },
    { id: 5, label: "Claim", estimatedTime: "5 min" },
    { id: 6, label: "Review", estimatedTime: "2 min" },
    { id: 7, label: "Payment", estimatedTime: "3 min" }
];

const Stepper = ({ currentStep, completedSteps = [], timeSpent }) => {
    const getStepStatus = (stepId) => {
        if (completedSteps.includes(stepId)) return "completed";
        if (stepId === currentStep) return "current";
        return "pending";
    };

    return (
        <div className="bg-transparent p-6 pb-0 pt-0 rounded-xl status_box">
            {/* <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-gray-800">Form Progress</h2>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                    <BsClock className="text-blue-500 mr-2" />
                    <span className="text-blue-700 font-medium">{timeSpent} min spent</span>
                </div>
            </div> */}

            <div className="relative flex justify-between items-center overflow-x-auto min-w-max md:min-w-60 status_bar">
                {steps.map((step, index) => (
                    <div key={step.id} className="relative flex flex-col items-start flex-1 status_box_inner">
                        <div className="flex items-center mb-2">
                            <span className={`text-xl font-bold mr-2 step_id
                                ${getStepStatus(step.id) === "completed"
                                    ? "text-black-600"
                                    : getStepStatus(step.id) === "current"
                                        ? "text-black-600"
                                        : "text-gray-400"}`}
                            >
                                {String(step.id).padStart(2, '0')}
                            </span>
                            <p className={`text-sm font-small step_lebel
                                ${getStepStatus(step.id) === "completed"
                                    ? "text-black-600"
                                    : getStepStatus(step.id) === "current"
                                        ? "text-gray-600"
                                        : "text-gray-400 step_lebel"}`}
                            >
                                {step.label}
                            </p>
                        </div>

                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className={`
                                w-6 h-6 rounded-full flex items-center justify-center 
                                transition-all duration-500 relative z-10 circle_status
                                ${getStepStatus(step.id) === "completed"
                                    ? "bg-blue-500 text-white"
                                    : getStepStatus(step.id) === "current"
                                        ? "bg-white-500 text-black border-2 border border-blue-500"
                                        : "bg-gray-100 text-gray-500 border-2 border border-blue-200"
                                }
                                ${getStepStatus(step.id) !== "pending" ? "shadow-lg" : ""}
                            `}
                        >
                            {getStepStatus(step.id) === "completed" && (
                                <BsCheck className="text-2xl" />
                            )}
                        </motion.div>
                        {(getStepStatus(step.id) === "completed") && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-xs text-gray-400 mt-2 text-transparent step_lebel"
                            >
                                (Appr 5 min)
                            </motion.p>
                        )}
                        {(getStepStatus(step.id) === "current" || getStepStatus(step.id) != "completed") && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-xs text-gray-400 mt-2 step_lebel"
                            >
                                ( App {step.estimatedTime})
                            </motion.p>
                        )}

                        {index < steps.length - 1 && (
                            <div className="absolute top-12 left-[20%] w-full h-[2px] pl-2 pr-8 current_step_line">
                                <div className={`h-full transition-all duration-500
                                    ${getStepStatus(step.id) === "completed"
                                        ? "bg-blue-500 border-blue-500 pr-2"
                                        : getStepStatus(step.id) === "current"
                                            ? "border-[3px] border-dashed border-blue-500 status_dashed"
                                            : "border-[1px] border-blue-200 pr-2 bg-blue-200"}`}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;
