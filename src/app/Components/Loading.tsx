import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <video
                    src="/public/loader.webm"
                    autoPlay
                    loop
                    muted
                    className="w-32 h-32"
                />
            </div>
        </div>
    );
};

export default Loading;