
export const weatherFormKelvinToCelsius = (kelvin: number): number => {
    const celsius: number = kelvin - 273
    return +celsius.toFixed(1)
}