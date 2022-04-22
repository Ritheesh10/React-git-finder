import React, { useState } from "react";
import { FaSearch, FaSuitcase, FaBuilding } from "react-icons/fa";

const Search = props => {
  const [state, setState] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    props.onTermSubmit(state);
    
  };
  return (
    <div className="searchblock">
      <form action="" onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            placeholder="search profile"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </span>
        <span>
          <FaSearch />
        </span>
      </form>
      <br />
      <figure>
        <img src={props.user.avatar_url} alt={props.user.id} width={"200px"} />
        <figcaption>
          <h2>{props.user.login}</h2>
        </figcaption>
        <br />
        <span><FaSuitcase/></span>
        <span>{props.user.company}</span>
        <br />
        <span><FaBuilding/> </span>
        <span>{props.user.location}</span>
      </figure>
    </div>
  );
};

export default Search;
