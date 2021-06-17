export const increment = (number) => {
    return ({
        type: 'increment',
        payload: number
    })
}

export const login = () => {
    return ({
        type: 'login'
    })
}

export const logout = () => {
    return ({
        type: 'logout'
    })
}

