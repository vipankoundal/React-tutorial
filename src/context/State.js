import React, { useEffect, useReducer } from "react";
import CrtContext from "./UseContext";
import Reducer from "./Reducer";
let API = "https://hn.algolia.com/api/v1/search?";
const Dstate = ({ children }) => {
  const initialState = {
    isLoading: true,
    query: "html",
    nbPages: 0,
    page: 1,
    hits: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "Get_DATA",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  //Pagination

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  //search
  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      Kushbhi: searchQuery,
      //or
      //payload: searchQuery,
    });
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <CrtContext.Provider
      value={{ ...state, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </CrtContext.Provider>
  );
};
export default Dstate;
