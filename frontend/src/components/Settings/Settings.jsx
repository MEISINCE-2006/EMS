import React from 'react';
import { FaUser, FaLock, FaBell, FaPalette } from 'react-icons/fa';

const Settings = () => {
    return (
        <div className="p-6 bg-gray-100 h-screen overflow-hidden flex flex-col">
            <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text drop-shadow-md tracking-wide">
                Settings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <FaUser className="text-teal-500 text-2xl mr-3" />
                        <h4 className="text-xl font-semibold">Profile Settings</h4>
                    </div>
                    <p className="text-gray-600">Manage your profile information and preferences.</p>
                    <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
                        Edit Profile
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <FaLock className="text-teal-500 text-2xl mr-3" />
                        <h4 className="text-xl font-semibold">Security Settings</h4>
                    </div>
                    <p className="text-gray-600">Change password and manage security preferences.</p>
                    <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
                        Change Password
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <FaBell className="text-teal-500 text-2xl mr-3" />
                        <h4 className="text-xl font-semibold">Notifications</h4>
                    </div>
                    <p className="text-gray-600">Configure notification preferences and alerts.</p>
                    <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
                        Manage Notifications
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <FaPalette className="text-teal-500 text-2xl mr-3" />
                        <h4 className="text-xl font-semibold">Appearance</h4>
                    </div>
                    <p className="text-gray-600">Customize the look and feel of your dashboard.</p>
                    <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
                        Customize Theme
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
