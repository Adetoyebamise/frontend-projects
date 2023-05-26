/* eslint-disable no-unused-vars */
import React, { useContext } from "react"
import logoCalender from "../assets/logo.png"
import GlobalContext from "../context/GlobalContext"
import dayjs from "dayjs"
export default function CalenderHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext)
  function handlePrevMonth(params) {
    setMonthIndex(monthIndex - 1)
  }
  function handleNextMonth(params) {
    setMonthIndex(monthIndex + 1)
  }
  function handleReset(params) {
    setMonthIndex(dayjs().month())
  }
  return (
    <div className="px-4 py-2 border-gray-100 flex items-center">
      <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">menu</span> <img src={logoCalender} alt="google calender" className="mr-1 w-10 h-10" />
      <h1 className="mr-10 text-xl text-gray-600 font-bold">Calender</h1>
      <button onClick={handleReset} className="border rounded px-4 py-2 mr-5 ml-5 ">
        {" "}
        Today{" "}
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">chevron_left</span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 ml-2 mr-4">chevron_right</span>
      </button>
      <h2 className="ml-2 text-xl text-gray-500 font-bold">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>

      {/* <button>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 ml-64">search</span>
      </button>
      <button>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">help</span>
      </button>
      <button>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">settings</span>
      </button>
      <div className="inline-block">
        <button className="border rounded px-4 py-2 mr-5 ml-5 ">
          Month <span className="material-symbols-outlined ">arrow_drop_down</span>
        </button>
      </div>
      <button>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">apps</span>
      </button>
      <button>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">account_circle</span>
      </button> */}
    </div>
  )
}
