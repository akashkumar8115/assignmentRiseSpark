import React from "react";
import { MdOutlineFileUpload } from 'react-icons/md';

const FileUpload = () => {
    return (
        <div className="mt-6">
            <label className="block text-gray-700 mb-2 font-medium">Upload Files</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                    <MdOutlineFileUpload className="text-4xl text-gray-400 group-hover:text-blue-500 mx-auto mb-2" />
                    <p className="text-gray-600 group-hover:text-blue-500">Upload Contract</p>
                    <p className="text-xs text-gray-400 mt-2">PDF, DOC up to 10MB</p>
                </div>
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                    <MdOutlineFileUpload className="text-4xl text-gray-400 group-hover:text-blue-500 mx-auto mb-2" />
                    <p className="text-gray-600 group-hover:text-blue-500">Arbitration Agreement</p>
                    <p className="text-xs text-gray-400 mt-2">PDF, DOC up to 10MB</p>
                </div>
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                    <MdOutlineFileUpload className="text-4xl text-gray-400 group-hover:text-blue-500 mx-auto mb-2" />
                    <p className="text-gray-600 group-hover:text-blue-500">Additional Documentation</p>
                    <p className="text-xs text-gray-400 mt-2">PDF, DOC up to 10MB</p>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
