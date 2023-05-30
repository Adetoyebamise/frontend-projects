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
  const { monthIndex, setSmallCalenderMonth, setDaySelected, daySelected } = useContext(GlobalContext)
  useEffect(() => {
    setCurrentMonthIndex(monthIndex)
  }, [monthIndex])
  function handlePrevMonth(params) {
    setCurrentMonthIndex(currentMonthIndex - 1)
  }
  function handleNextMonth(params) {
    setCurrentMonthIndex(currentMonthIndex + 1)
  }
  function getCurrentDayClass(day) {
    const format = "DD-MM-YY"
    const nowDay = dayjs().format(format)
    const currDay = day.format(format)
    const slcDay = daySelected && daySelected.format(format)
    if (nowDay === currDay) {
      return "bg-blue-600 rounded-full w-7 text-white"
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold"
    } else {
      return ""
    }
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">{dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}</p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">chevron_left</span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">chevron_right</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-row-6  ">
        {currentMonth[0].map((day, i) => {
          return (
            <span key={i} className="text-sm py-1 pl-3">
              {day.format("dd").charAt(0)}
            </span>
          )
        })}
        {currentMonth.map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.map((day, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setSmallCalenderMonth(currentMonthIndex)
                      setDaySelected(day)
                    }}
                    className={`py-1 w-full ${getCurrentDayClass(day)}`}
                  >
                    <span className="text-sm"> {day.format("DD")}</span>
                  </button>
                )
              })}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
