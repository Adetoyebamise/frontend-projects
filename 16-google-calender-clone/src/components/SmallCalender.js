/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react"
import dayjs from "dayjs"
import getMonth from "../util"
import GlobalContext from "../context/GlobalContext"

export default function SmallCalender() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex))
  }, [currentMonthIndex])
  const { monthIndex, setMonthIndex } = useContext(GlobalContext)
  useEffect(() => {
    setCurrentMonthIndex(monthIndex)
  }, [monthIndex])
  function handlePrevMonth(params) {
    setCurrentMonthIndex(currentMonthIndex - 1)
  }
  function handleNextMonth(params) {
    setCurrentMonthIndex(currentMonthIndex + 1)
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">{dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}</p>
        <button onClick={handlePrevMonth}>
          <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">chevron_left</span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">chevron_right</span>
        </button>
      </header>
    </div>
  )
}
