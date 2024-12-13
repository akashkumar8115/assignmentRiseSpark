import React, { useState } from 'react';
import { FaCloudUploadAlt, FaFile, FaTrash } from 'react-icons/fa';

const FileUpload = ({ onFileUpload, acceptedFiles = ".pdf,.doc,.docx", maxSize = 10 }) => {
    const [files, setFiles] = useState([]);
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    };

    const handleFileInput = (e) => {
        const selectedFiles = Array.from(e.target.files);
        handleFiles(selectedFiles);
    };

    const handleFiles = (newFiles) => {
        const validFiles = newFiles.filter(file => {
            const sizeValid = file.size <= maxSize * 1024 * 1024;
            const typeValid = acceptedFiles.includes(file.name.split('.').pop().toLowerCase());
            return sizeValid && typeValid;
        });

        setFiles(prev => [...prev, ...validFiles]);
        onFileUpload && onFileUpload(validFiles);
    };

    const removeFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-4">
            <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`
                    border-2 border-dashed rounded-lg p-8 text-center
                    transition-colors duration-200
                    ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                `}
            >
                <input
                    type="file"
                    multiple
                    accept={acceptedFiles}
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-upload"
                />
                <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center cursor-pointer"
                >
                    <FaCloudUploadAlt className="text-4xl text-gray-400 mb-2" />
                    <p className="text-gray-600">Drag and drop files here or click to browse</p>
                    <p className="text-sm text-gray-400 mt-1">
                        Maximum file size: {maxSize}MB
                    </p>
                </label>
            </div>

            {files.length > 0 && (
                <div className="space-y-2">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                            <div className="flex items-center space-x-3">
                                <FaFile className="text-gray-400" />
                                <span className="text-sm text-gray-600">{file.name}</span>
                            </div>
                            <button
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FileUpload;