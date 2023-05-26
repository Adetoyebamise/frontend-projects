import React from "react"
import plusImg from "../assets/plus.svg"

export default function CreateEventButton() {
  return (
    <button className="border p-2  ml-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <img src={plusImg} alt="plus" className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
      <span className="material-symbols-outlined">arrow_drop_down</span>
    </button>
  )
}
