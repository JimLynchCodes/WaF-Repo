
export interface GenericPromiseRespone {
    error?: any,
    data?: any
}


export const bar = async (): Promise<GenericPromiseRespone> => {
    return {
        error: 'any',
        // data: 'any'
    }
}
