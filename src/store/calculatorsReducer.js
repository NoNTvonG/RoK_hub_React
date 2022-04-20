export const calculatorsReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const defaultState = {
  resources: {
    sets: {
      food: [
        "1 000",
        "10 000",
        "50 000",
        "150 000",
        "500 000",
        "1 500 000",
        "5 000 000",
      ],
      wood: [
        "1 000",
        "10 000",
        "50 000",
        "150 000",
        "500 000",
        "1 500 000",
        "5 000 000",
      ],
      stone: [
        "750",
        "7 500",
        "37 500",
        "112 500",
        "375 000",
        "1 125 000",
        "3 750 000",
      ],
      gold: [
        "500",
        "3 000",
        "15 000",
        "50 000",
        "200 000",
        "600 000",
        "2 000 000",
      ],
    },
  },
}
