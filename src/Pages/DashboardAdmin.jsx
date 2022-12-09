import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutAction } from '../action/userAction'
import { FcSalesPerformance, FcInTransit, FcTemplate, FcClock, FcBriefcase } from 'react-icons/fc'
import { IoIosArrowBack } from 'react-icons/io';

const DashboardAdmin = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true)

  let username = useSelector((state)=>{
    return state.userReducer.username
  })

  const onLogout = () => {
    dispatch(logoutAction())
    navigate('/', { replace: true })
  }
  return (
    <div>
      
    <div>
    <div className='hidden sm:block'>
      <div className={`${open ? "w-60" : "w-28"} p-5 pt-8 h-screen bg-white shadow-lg relative duration-500`}>
        <IoIosArrowBack size={30}
          className={`absolute -right-3 rounded-full cursor-pointer top-9 border-2 duration-300 bg-white  ${!open && "rotate-180"} ring-2 ring-teal-200`}
          onClick={() => setOpen(!open)} />
        <div className='flex gap-x-3 items-center'>
          <span className={`cursor-pointer origin-center bg-gradient-to-r from-green-500 to-blue-600 text-2xl text-transparent font-extrabold bg-clip-text ${!open && "hidden"}`}>Hello</span>
          <button className={`bg-sky-500 px-3 py-2 rounded-lg font-bold text-white hover:bg-red-400 ${!open && 'hidden'}`} onClick={onLogout}>Logout</button>
        </div>
        <p className='ml-1 font-bold'>{username}</p>
        <ul className='pt-16 mx-1'>
          <li className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-5`}
          >
            <FcTemplate size={30} className={`duration-300 ${open && "rotate-[360deg]"}`} />
            <span className={`${!open && 'hidden'}`}>Dashboard</span>
          </li>
          <li className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-10`}
          >
            <FcBriefcase size={30} className={`duration-300 ${open && "rotate-[360deg]"}`} />
            <span className={`${!open && 'hidden'}`}>Product</span>
          </li>
          <li className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-10`}
          >
            <FcInTransit size={30} className={`duration-300 ${open && "rotate-[360deg]"}`} />
            <span className={`${!open && 'hidden'}`}>Transaction</span>
          </li>
          <li className={` font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-10`}
          >
            <FcSalesPerformance size={30} className={`duration-300 ${open && "rotate-[360deg]"}`} />
            <span className={`${!open && 'hidden'}`}>Sales Report</span>
          </li>
          <li className={` font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-10`}
          >
            <FcClock size={30} className={`duration-300 ${open && "rotate-[360deg]"}`} />
            <span className={`${!open && 'hidden'}`}>Product History</span>
          </li>
        </ul>
      </div>
    </div>
    <div className='sm:hidden w-10'>
      <div className={`pt-8 h-screen bg-whiterelative`}>
        <img src='' className={`h-10 rounded-full cursor-pointer`} alt='medcare.com' />
        <ul className='pt-10 mx-1'>
          <li className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-5`}>
            <FcTemplate size={30} />
          </li>
          <li className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-5`}>
            <FcBriefcase size={30} />
          </li>
          <li className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-5`} >
            <FcInTransit size={30} />
          </li>
          <li className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-5`} >
            <FcSalesPerformance size={30} />
          </li>
          <li className={`font-semibold text-xl flex items-center gap-x-4 cursor-pointer hover:bg-slate-300 rounded-md mt-5`}>
            <FcClock size={30} />
          </li>
        </ul>
      </div>
    </div>
  </div>
  
    </div>
  )
}

export default DashboardAdmin