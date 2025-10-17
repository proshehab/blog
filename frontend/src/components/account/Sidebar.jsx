import React, { useState } from "react";
import {
    UserCircleIcon,
    DocumentTextIcon,
    HeartIcon,
    KeyIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const tabs = [
        {
            id: "profile",
            url: "/account/profile",
            name: "My Profile",
            icon: UserCircleIcon,
        },
        {
            id: "blogs",
            url: "/account/my-blogs",
            name: "My Blogs",
            icon: DocumentTextIcon,
        },
        {
            id: "favorites",
            url: "/account/saved-blogs",
            name: "Favorites",
            icon: HeartIcon,
        },
        {
            id: "password",
            url: "/account/change-password",
            name: "Change Password",
            icon: KeyIcon,
        },
    ];

    return (
        <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-6">
                    <img
                        src="https://res.cloudinary.com/dgcqtwfbj/image/upload/w_450/v1756797851/portrait-787522_1280_p6fluq.jpg"
                        alt=""
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h2 className="text-lg font-medium text-gray-900">
                            Eva
                        </h2>
                        <p className="text-sm text-gray-500">View Profile</p>
                    </div>
                </div>
                <nav className="space-y-1">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.id}
                            to={tab.url}
                            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors`}
                        >
                            <tab.icon className="w-5 h-5" />
                            <span>{tab.name}</span>
                        </Link>
                    ))}
                </nav>
                <div className="pt-4 mt-6 border-t border-gray-200">
                    <button
                        onClick={() => {
                            console.log("Logout clicked");
                        }}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                            />
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;