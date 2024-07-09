import React from 'react';

interface ErrorProps {
    message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className="w-full bg-red-700 h-[100vh] flex items-center justify-center">
            <div className="text-2xl text-red-600">Error: {message}</div>
        </div>
    );
};

