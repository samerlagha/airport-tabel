export const flightsListSelector = state =>{
    return state.flights.flightsData
}

export const spinnerSelectore = state=>{
    return state.flights.isLoading
}

export const activeButtonSelector =state=>{
    return state.flights.isActiveButton
}