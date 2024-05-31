import dynamic from 'next/dynamic.js';
import React from 'react';
// import PdfGenerator from './PdfGen';
const PdfGenerator = dynamic(() => import('./PdfGen.js'), { ssr: false });


const DownloadWrapper = ({ data, congrats, confirmLang }) => {
    return (
        <div className="flex justify-center items-center w-full min-w-full min-h-[70vh]">
            <div className="mx-auto w-fit py-8 space-y-4 px-10 border border-primary rounded">
                <h1><b>{congrats}!!</b>. {confirmLang}</h1>
                <PdfGenerator data={data} />
            </div>
        </div>
    );
};

export default DownloadWrapper;