import React from "react"

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: index => {},
  smallCalenderMonth: null,
  setSmallCalenderMonth: index => {},
  daySelected: null,
  setDaySelected: day => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCallEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  labels: [],
  setLabels: () => {},
  updateLabel : () => { },
  filteredEvents : () => {}
})
export default GlobalContext
