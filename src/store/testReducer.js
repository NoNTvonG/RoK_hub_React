const defaultState = {
  home: 0,
  homeList: [
    { id: 1, name: "villa", price: "2000" },
    { id: 2, name: "house", price: "1000" },
    { id: 3, name: "kwartyra", price: "550" },
  ],
}

const ADD_HOME = "ADD_HOME"
const GET_HOME = "GET_HOME"
const GET_HOME_LIST = "GET_HOME_LIST"

export const testReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_HOME:
      return { ...state, home: state.home + action.payload }
    case GET_HOME:
      return { ...state, home: state.home - action.payload }
    case GET_HOME_LIST:
      return {
        ...state,
        homeList: [...state.homeList, { id: 4, name: "test", price: "444" }],
      }
    default:
      return state
  }
}
