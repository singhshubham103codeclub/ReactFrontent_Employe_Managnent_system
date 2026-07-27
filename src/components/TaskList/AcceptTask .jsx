import React from 'react'
const AcceptTask=()=>{
    return (
         <div className="h-full w-[400px] bg-orange-400 rounded-xl flex-shrink-0"> 
                <div className="flex justify-between items-center m-5">
                <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
                <h4>20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold"> Make a you tube video</h2>
                <p className="text-sm mt-2"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe dignissimos vero quae a odio eveniet, illum consectetur sapiente. Delectus ex suscipit quis esse vitae cumque commodi quisquam inventore iusto.
                </p>
                <div className='flex justify-between m-6'>
                    <button className='bg-green-500 py-1 px-4 rounded-sm text-sm'>Accept</button>
                    <button className='bg-red-500 py-1 px-4 rounded-sm text-sm'>Reject</button>
                </div>
            </div>
    )
}
export default AcceptTask