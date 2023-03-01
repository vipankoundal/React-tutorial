import React from "react";
import { useContext } from "react";
import CrtContext from "./context/UseContext";

const Home = () => {
  const {
    hits,
    isLoading,
    searchPost,
    page,
    nbPages,
    getPrevPage,
    getNextPage,
  } = useContext(CrtContext);
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <input type="text" onChange={(e) => searchPost(e.target.value)} />
      <div>
        <button onClick={() => getPrevPage()}>Prev</button>
        <span>
          {page} of {nbPages}
        </span>
        <button onClick={() => getNextPage()}>Next</button>
      </div>
      {hits.map((hit) => {
        return <p key={hit.id}>{hit.title}</p>;
      })}
    </div>
  );
};

export default Home;
