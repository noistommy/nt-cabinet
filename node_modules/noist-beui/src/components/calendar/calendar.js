const lastDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
export const week_kr = ['일', '월', '화', '수', '목', '금', '토']
export const week_kr_l = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
]
export const week_en_s = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
export const week_en_m = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
// const week_en_l = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const week_en_l = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
export const MONTH_TEXT_LIST = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const MONTH_TEXT_LIST_SHORT = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
]

export const getDateInfo = (date = new Date()) => {
  const newDate = typeof date === 'string' ? new Date(date) : date
  const y = newDate.getFullYear()
  const m = newDate.getMonth() + 1
  const d = newDate.getDate()
  return { year: y, month: m, date: d }
}
const getStartDay = (year, month) => {
  let startIndex = 0

  let basicDay = 365 * (year - 1) // 현재 월 기준 전년까지 기본 일 수
  // 윤년 계산
  let leafDay =
    Math.floor((year - 1) / 4) -
    Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400)
  // 현재 해 오늘까지의 일 수
  let currentYearDay = 1

  if (month > 1 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    lastDayList[1] = 29
  } else {
    lastDayList[1] = 28
  }

  for (let i = 0; i < month - 1; i++) {
    currentYearDay += lastDayList[i]
  }
  startIndex = (basicDay + leafDay + currentYearDay) % 7
  return startIndex
}

export const setCalendar = ({ year, month, date }) => {
  const now = getDateInfo()
  let startDay = getStartDay(year, month)

  let dayList = []

  let currLast = lastDayList[month - 1]
  let prevLast = month === 1 ? 31 : lastDayList[month - 2]

  let currDay = 1
  let nextDay = 1

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      let cell = {
        position: {
          x: 0,
          y: 0,
        },
        disabled: false,
        type: [],
        name: '',
      }
      cell.position.x = j
      cell.position.y = i
      if (i === 0 && j < startDay) {
        cell.type.push('prev')
        cell.name = prevLast + (j - startDay) + 1
      } else if (currDay <= currLast) {
        if (j === 0) {
          cell.type.push('sun')
        }
        if (j === 6) {
          cell.type.push('sat')
        }
        if (now.year === year && now.month === month && currDay === now.date) {
          cell.type.push('today')
        }
        cell.name = currDay
        currDay++
      } else {
        cell.type.push('next')
        cell.name = nextDay
        nextDay++
      }
      dayList.push(cell)
    }
  }
  if (nextDay > 7) {
    dayList = dayList.slice(0, -7)
  }
  return dayList
}

//
// document.getElementById('calDate').addEventListener('click', () => {
//     const result = setCalendar(2022, 11);
//     console.log(result);
// })
