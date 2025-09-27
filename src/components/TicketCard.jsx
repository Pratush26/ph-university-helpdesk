import { FaRegCalendar, FaCircle } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function TicketCard({ e, setDataList, dataList }) {
    const notify = (msg) => {
        toast(msg)
    }
    console.log(e.status)
    const handleClick = (d) => {
        if (d.status === "Open") {
            d.status = "In-progress"
            setDataList([...dataList])
            notify(`${d.title} is in progress`)
        }
        notify("complete")
    }
    return (
        <button onClick={() => handleClick(e)} className="flex flex-col items-center justify-center gap-3 w-full bg-white p-6 rounded shadow-lg/60 shadow-gray-400">
            <div className="flex items-center justify-between gap-2 font-medium text-sm w-full">
                <span className="flex items-center gap-2">
                    <img src={e.userImg} alt="user" loading="lazy" className="h-20 aspect-square object-top object-cover rounded-full" />
                    <p>{e.requestedBy}</p>
                </span>
                <span className="space-y-1">
                    <p className={`uppercase text-sm font-medium ${e.priority === "High" ? "text-red-500" : e.priority === "Low" ? "text-emerald-700" : "text-yellow-500"}`}>{e.priority} Priority</p>
                    <span className={`text-xs px-3 py-2 rounded-sm text-nowrap flex items-center justify-center gap-1 ${e.status === "Open" ? "text-emerald-700 bg-emerald-200" : "text-yellow-600 bg-yellow-200"}`}><FaCircle />{e.status}</span>
                </span>
            </div>
            <div className="text-start font-semibold w-full">
                <p>{e.subject}</p>
                <p className="text-sm font-medium text-gray-500">{e.description}</p>
            </div>
            <div className="flex items-center justify-between gap-2 w-full text-xs font-medium text-gray-500">
                <span className="flex items-center justify-between gap-2 w-full">
                    <p>Category : {e.category}</p>
                    <span className="flex gap-1">
                        <FaRegCalendar />
                        <p>{new Date(e.createdAt).toLocaleString()}</p>
                    </span>
                </span>
            </div>
        </button>
    )
}