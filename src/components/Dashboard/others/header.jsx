import React from "react";

const Header = () => {
    return (
        <div className="flex w-full items-center justify-between px-4 py-3 bg-gray-400">
            <h1 className="text-2xl font-semibold leading-tight">
                Hello <br /> <span className="text-4xl font-semibold">Shubh</span>
            </h1>
            <button className="rounded-lg bg-red-500 px-4 py-2 text-black">
                Log out
            </button>
        </div>
    );
};

export default Header