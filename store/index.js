const initialState = {
  loading: false,
  filteredDataProducts: []
}

export default (state = initialState, action) => {
  const { type } = action || {};

  switch(type) {
    case "LOADING":
      return {
        ...state,
        loading: action?.loading
      }
    case "GET_LIST_DATA":
      return {
        ...state,
        filteredDataProducts: action?.filteredDataProducts
      }
    default:
      return state
  }
}