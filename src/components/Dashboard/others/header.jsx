import React from "react";

const Header = ({ userName = "Shubh", showWave = false }) => {
    return (
        <div className="flex w-full items-start justify-between">
            <h1 className="text-2xl font-semibold leading-tight text-white">
                Hello <br />
                <span className="text-[28px] font-bold leading-none sm:text-3xl">
                    {userName}
                    {showWave && <span className="ml-2">👋</span>}
                </span>
            </h1>
            <button className="bg-[#c73333] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b72e2e]">
                Log Out
            </button>
        </div>
    );
};

export default Header
