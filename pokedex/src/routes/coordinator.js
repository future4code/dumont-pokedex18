export const goToHome = (history) => {
    history.push("/")
}

export const goToDetails = (history) => {
    history.push("/Details")
}

export const goToPokedex = (history) => {
    history.push("/Pokedex")
}

export const goBack = (history) => {
    history.goBack()
}