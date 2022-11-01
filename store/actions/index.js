import fetcher from "../../fetch/index.js";

export const setLoading = (status) => {
  return {
    type: "LOADING",
    loading: status
  }
};

export const getListData = (url) => {
  return (dispatch) => {
    dispatch(setLoading(true))

    fetcher(url, {
      method: "GET"
    })
    .then(async (data) => {
      if(data) {
        dispatch({
          type: "GET_LIST_DATA",
          filteredDataProducts: data
        })
      }
    })
    .catch((e) => {
      console.error(e)
    })
    .finally(() => dispatch(setLoading(false)))
  };
};