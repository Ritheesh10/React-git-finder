import React from "react";

const Repo = ({ id, name,bio, owner, html_url, description, created_at,clone_url,default_branch }) => {
  return (
   
        <div>
          <h2>{name}</h2>
          <div className="owner_block">
            <img src={owner.avatar_url} alt={owner.login} width={"100px"} />
            <h4>{owner.login}</h4>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="footer">
            <a href={clone_url} target="_blank">
              Clone Repo
            </a>
            
            <a href={html_url} target="_blank">
              view Repo
            </a>
          </div>
        </div>
    
  );
};

export default Repo;
