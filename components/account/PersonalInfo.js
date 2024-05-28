import React from 'react';

const PersonalInfo = ({ userInfo }) => {
    return (
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800 text-lg">Personal Profile</h3>
                <a href="#" className="text-primary">
                    Edit
                </a>
            </div>
            <div className="space-y-1">
                <h4 className="text-gray-700 font-medium">{userInfo?.name}</h4>
                <p className="text-gray-800">{userInfo?.email ?? "Not added"}</p>
                <p className="text-gray-800">{userInfo?.phone ?? "Not added"}</p>
            </div>
        </div>
    );
};

export default PersonalInfo;