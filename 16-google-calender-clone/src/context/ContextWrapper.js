/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useReducer } from "react"
import GlobalContext from "./GlobalContext"
import dayjs from "dayjs"

const savedEventsReducer = (state, {type, payload}) => {
  switch (type) {
    case "push":
      
      return [...state, payload];
    case "update":
      return state.map(evt => evt.id === payload.id ? payload : evt);
      case "delete": 
      return state.filter(evt => evt.id !== payload.id );
    default:
      throw new Error();
  }
}
function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null)
  const [daySelected, setDaySelected] = useState(dayjs())
  const [showEventModal, setShowEventModal] = useState(false)
  const [savedEvents, dispatchCallEvent] = useReducer("")
  useEffect(() => {
    if (smallCalenderMonth !== null) {
      setSmallCalenderMonth(smallCalenderMonth)
    }
  }, [smallCalenderMonth])
  return <GlobalContext.Provider value={{ monthIndex, setMonthIndex, smallCalenderMonth, setSmallCalenderMonth, showEventModal, setShowEventModal, daySelected, setDaySelected, savedEvents, dispatchCallEvent }}>{props.children}</GlobalContext.Provider>
}

export default ContextWrapper
