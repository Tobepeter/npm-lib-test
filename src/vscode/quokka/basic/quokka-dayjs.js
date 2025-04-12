import dayjs from 'dayjs'

const now = dayjs()
console.log(now.format('YYYY-MM-DD HH:mm:ss'))

const date = dayjs('2023-01-01')
console.log(date.format('YYYY-MM-DD'))

const diff = now.diff(date, 'days')
console.log(`距离2023-01-01已经过去了${diff}天`)
