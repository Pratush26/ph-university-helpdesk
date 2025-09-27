import { use, useState } from "react";
import TicketCard from "./TicketCard";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { ToastContainer } from 'react-toastify';

export default function Container({ data }) {
    const [dataList, setDataList] = useState(use(data))
    return (
        <main>
            <ToastContainer />
            <section id='hero' className='grid grid-cols-1 lg:grid-cols-3 min-h-[50vh] md:min-h-[70vh] items-center justify-items-center text-white w-11/12 mx-auto gap-4'>
                <div className='w-full relative h-5/6 lg:h-1/2 bg-linear-135 from-indigo-900 to-violet-700 rounded-xl flex flex-col items-center justify-center'>
                    <img src={img1} alt="design" className='absolute h-full w-auto right-0' />
                    <img src={img2} alt="design" className='absolute h-full w-auto left-0' />
                    <h5 className='text-2xl'>Pending</h5>
                    <h4 className='text-5xl font-medium'>{dataList.filter(e => e.status === "Pending").length}</h4>
                </div>
                <div className='w-full relative h-5/6 lg:h-1/2 bg-linear-135 from-slate-500 to-gray-700 rounded-xl flex flex-col items-center justify-center'>
                    <img src={img1} alt="design" className='absolute h-full w-auto right-0' />
                    <img src={img2} alt="design" className='absolute h-full w-auto left-0' />
                    <h5 className='text-2xl'>Submitted</h5>
                    <h4 className='text-5xl font-medium'>{dataList.filter(e => e.status === "Submitted").length}</h4>
                </div>
                <div className='w-full relative h-5/6 lg:h-1/2 bg-linear-135 from-emerald-700 to-emerald-900 rounded-xl flex flex-col items-center justify-center'>
                    <img src={img1} alt="design" className='absolute h-full w-auto right-0' />
                    <img src={img2} alt="design" className='absolute h-full w-auto left-0' />
                    <h5 className='text-2xl'>Reviewed</h5>
                    <h4 className='text-5xl font-medium'>{dataList.filter(e => e.status === "Reviewed").length}</h4>
                </div>
            </section>
            <div className="flex items-center justify-between gap-4 font-semibold w-11/12 mx-auto">
            <h2 className='text-2xl'>Customer Tickets</h2>
                <span className="bg-purple-200 rounded-sm border-2 border-purple-700">
                    <button className="px-4 py-2 cursor-pointer border-r-2 border-purple-700">All</button>
                    <button className="px-4 py-2 cursor-pointer border-r-2 border-purple-700">Pending</button>
                    <button className="px-4 py-2 cursor-pointer border-r-2 border-purple-700">Submitted</button>
                    <button className="px-4 py-2 cursor-pointer">Reviewed</button>
                </span>
            </div>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-4 my-6 w-11/12 mx-auto'>
                {dataList.map((e) => <TicketCard key={e.ticketId} dataList={dataList} setDataList={setDataList} e={e} />)}
            </section>
        </main>
    )
}