export const flightsListSelector = state =>{
    return state.flightsData.flightsData
}

export const spinnerSelectore = state=>{
    return state.flightsData.isLoading
}

export const activeButtonSelector =state=>{
    return state.flightsData.isActiveButton
}