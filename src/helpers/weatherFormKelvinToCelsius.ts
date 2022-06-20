
export const weatherFormKelvinToCelsius = (kelvin: number): number => {
    return +(kelvin - 273.15).toFixed(1)
}