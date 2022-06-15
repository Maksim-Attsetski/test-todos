
export const getDate = (): string => {
    const date = new Date()

    const day = date.getDay() >= 10 ? date.getDay() : `0${date.getDay()}`
    const month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : `0${(date.getMonth() + 1)}`
    const year = date.getFullYear() >= 10 ? date.getFullYear() : `0${date.getFullYear()}`

    return `${day}/${month}/${year}`
}