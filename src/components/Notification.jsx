import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiCheckCircle, BiErrorCircle, BiInfoCircle } from 'react-icons/bi';

const Notification = ({ message, type = "info", isVisible, onClose }) => {
    const variants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    };

    const getIcon = () => {
        switch(type) {
            case 'success':
                return <BiCheckCircle className="text-xl" />;
            case 'error':
                return <BiErrorCircle className="text-xl" />;
            default:
                return <BiInfoCircle className="text-xl" />;
        }
    };

    const getStyles = () => {
        switch(type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            default:
                return 'bg-blue-500';
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`fixed top-4 right-4 ${getStyles()} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 z-50`}
                >
                    {getIcon()}
                    <span>{message}</span>
                    <button 
                        onClick={onClose}
                        className="ml-3 hover:text-gray-200 transition-colors"
                    >
                        ×
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
