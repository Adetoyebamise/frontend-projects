// variable defined by JS on the clock
const hour = document.getElementById("clock-hour")
const minutes = document.getElementById("clock-minutes")

const clockIt = () => {
  let date = new Date()

  let hh = (date.getHours() / 12) * 360
  let mm = (date.getMinutes() / 60) * 360

  hour.style.transform = `rotateZ(${hh + mm / 12}deg/)`
  minutes.style.transform = `rotateZ(${mm}deg)`
}
setInterval(clockIt, 1000)

// variable defined by JS on the digital clock
const dateDayWeek = document.getElementById("date-day-week")
const dateMonth = document.getElementById("date-month")
const dateDay = document.getElementById("date-day")
const dateYear = document.getElementById("date-year")
const textHour = document.getElementById("text-hour")
const textMinutes = document.getElementById("text-minutes")
const textAmPm = document.getElementById("text-ampm")

const clockForTextIt = () => {
  let date = new Date()
  let dayWeek = date.getDay()
  let month = date.getMonth()
  let day = date.getDate()
  let year = date.getFullYear()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let ampm

  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const monthsInAYear = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"]

  dateDayWeek.innerHTML = `${daysOfTheWeek[dayWeek]}`
  dateMonth.innerHTML = `${monthsInAYear[month]}`
  dateDay.innerHTML = `${day + ","}`
  dateYear.innerHTML = `${year}`
  textHour.innerHTML = `${hour + " :"}`
  textMinutes.innerHTML = `${minutes}`

  if (hour >= 12) {
    hour = hour - 12
    ampm = "PM"
  } else {
    ampm = "AM"
  }
  textAmPm.innerHTML = ampm

  if (hour == 0) {
    hour = 12
  }

  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  textMinutes.innerHTML = `${minutes}`
}
setInterval(clockForTextIt, 1000)
