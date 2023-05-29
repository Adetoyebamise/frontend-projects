/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react"
import GlobalContext from "./GlobalContext"
import dayjs from "dayjs"

function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null)
  useEffect(() => {
    if(smallCalenderMonth !== null){
      setSmallCalenderMonth(smallCalenderMonth)
    }
  }, [smallCalenderMonth])
  return <GlobalContext.Provider value={{ monthIndex, setMonthIndex, smallCalenderMonth, setSmallCalenderMonth }}>{props.children}</GlobalContext.Provider>
}

export default ContextWrapper
