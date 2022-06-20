
export const getDate = (custom: null | number = null): string => {
    let date
    if(custom) {
        date = new Date(custom)

        const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
        const minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
        return `${hours}:${minutes}`
    } else {
        date = new Date()

        const day = date.getDay() >= 10 ? date.getDay() : `0${date.getDay()}`
        const month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : `0${(date.getMonth() + 1)}`
        const year = date.getFullYear() >= 10 ? date.getFullYear() : `0${date.getFullYear()}`

        return `${day}/${month}/${year}`
    }
}