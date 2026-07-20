import AllTask from "./others/AllTask";
import Header from "./others/header";

const AdminDashboard = () => {
    return (
        <div className="min-h-screen w-full bg-[#111111] px-7 py-6 text-white">
            <Header userName="Sarthak" showWave />

            <div className="mt-7 bg-[#1c1c1c] px-5 py-6">
                <form
                    className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <div className="w-full space-y-5 lg:max-w-[475px]">
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-zinc-300">
                                Task Title
                            </label>
                            <input
                                className="h-8 w-full rounded border border-zinc-500 bg-transparent px-2 text-sm font-medium text-white outline-none placeholder:text-zinc-400 focus:border-zinc-300"
                                type="text"
                                placeholder="Make a UI design"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-zinc-300">
                                Date
                            </label>
                            <input
                                className="h-8 w-full rounded border border-zinc-500 bg-transparent px-2 text-sm font-medium text-white outline-none [color-scheme:dark] focus:border-zinc-300"
                                type="date"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-zinc-300">
                                Assign to
                            </label>
                            <input
                                className="h-8 w-full rounded border border-zinc-500 bg-transparent px-2 text-sm font-medium text-white outline-none placeholder:text-zinc-400 focus:border-zinc-300"
                                type="text"
                                placeholder="employee name"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-zinc-300">
                                Category
                            </label>
                            <input
                                className="h-8 w-full rounded border border-zinc-500 bg-transparent px-2 text-sm font-medium text-white outline-none placeholder:text-zinc-400 focus:border-zinc-300"
                                type="text"
                                placeholder="design, dev, etc"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[475px]">
                        <label className="mb-1 block text-sm font-semibold text-zinc-300">
                            Description
                        </label>
                        <textarea
                            className="h-44 w-full resize-none rounded border border-zinc-500 bg-transparent p-3 text-sm font-medium text-white outline-none placeholder:text-zinc-400 focus:border-zinc-300"
                        />
                        <button
                            className="mt-4 h-11 w-full rounded bg-[#62c98d] text-sm font-semibold text-white transition hover:bg-[#54b97e]"
                            type="submit"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
