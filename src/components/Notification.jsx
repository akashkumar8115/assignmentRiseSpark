import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

const Notification = ({ message, type = "success", isVisible, onClose }) => {
    const icons = {
        success: <FaCheckCircle className="text-green-500 text-xl" />,
        error: <FaExclamationCircle className="text-red-500 text-xl" />
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="fixed top-4 right-4 z-50"
                >
                    <div className={`
                        flex items-center space-x-3 p-4 rounded-lg shadow-lg
                        ${type === "success" ? "bg-green-50" : "bg-red-50"}
                    `}>
                        {icons[type]}
                        <p className={`
                            font-medium
                            ${type === "success" ? "text-green-800" : "text-red-800"}
                        `}>
                            {message}
                        </p>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
