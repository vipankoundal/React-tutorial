const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "Get_DATA":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
        nbPages: action.payload.nbPages,
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.Kushbhi,
      };
    case "NEXT_PAGE":
      let nextPageNumber = state.page;

      nextPageNumber >= state.nbPages
        ? (nextPageNumber = 0)
        : (nextPageNumber += 1);
      return {
        ...state,
        page: nextPageNumber,
      };
    case "PREV_PAGE":
      let pageNumber = state.page;
      pageNumber <= 1 ? (pageNumber = 1) : (pageNumber -= 1);
      return {
        ...state,
        page: pageNumber,
      };
  }
  return state;
};

export default Reducer;
