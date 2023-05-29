import React from "react";

const GlobalContext = React.createContext({
  monthIndex : 0,
  setMonthIndex  : (index) => {},
  smallCalenderMonth : null,
  setSmallCalenderMonth : (index) => {},
  daySelected  : null,
  setDaySelected : (day) => {}
})
export default GlobalContext