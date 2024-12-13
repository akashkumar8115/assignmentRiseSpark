// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BiCheckCircle, BiErrorCircle, BiInfoCircle } from 'react-icons/bi';

// const Notification = ({ message, type = "info", isVisible, onClose }) => {
//     const variants = {
//         initial: { opacity: 0, y: -50 },
//         animate: { opacity: 1, y: 0 },
//         exit: { opacity: 0, y: -50 }
//     };

//     const getIcon = () => {
//         switch(type) {
//             case 'success':
//                 return <BiCheckCircle className="text-xl" />;
//             case 'error':
//                 return <BiErrorCircle className="text-xl" />;
//             default:
//                 return <BiInfoCircle className="text-xl" />;
//         }
//     };

//     const getStyles = () => {
//         switch(type) {
//             case 'success':
//                 return 'bg-green-500';
//             case 'error':
//                 return 'bg-red-500';
//             default:
//                 return 'bg-blue-500';
//         }
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     variants={variants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     className={`fixed top-4 right-4 ${getStyles()} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 z-50`}
//                 >
//                     {getIcon()}
//                     <span>{message}</span>
//                     <button 
//                         onClick={onClose}
//                         className="ml-3 hover:text-gray-200 transition-colors"
//                     >
//                         ×
//                     </button>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// };

// export default Notification;

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
