
export const getWindDirection = (deg: number): string => {
    switch (true) {
        case (deg === 0 || deg === 360): { return 'Север' }
        case (deg > 0 && deg < 90): { return 'Северо-Восток' }
        case (deg === 90): { return 'Восток' }
        case (deg > 90 && deg < 180): { return 'Юго-Восток' }
        case (deg === 180): { return 'Юг' }
        case (deg > 180 && deg < 270): { return 'Юго-Запад' }
        case (deg === 270): { return 'Запад' }
        case (deg > 270 && deg < 360): { return 'Северо-Запад' }
        default: return ''
    }
}