// https://api.github.com/users/snowleopardAlexa
import React, { useState, useEffect } from "react";

function GithubApi({ login }) {

  const [data, setData] = useState(null);
  // to handle errors we want to display something nice to the user
  const [ loading, setLoading ] = useState(false);
  const [error, setError] = useState(null);

  // we use useEffect to fetch API from remote source
  useEffect(() => {
      if(!login) return;
      setLoading(true);
      fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
      // anytime value changes we want to call login 
  }, [login]);

  // handling loading state, error state, and other states is essential 
  // for app develpment - it helps us to track problems. 
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if(!data) return null;   

     return (
         <div>
             <h1>{data.name}</h1>
             <p>{data.location}</p>
             <img alt={data.login} src={data.avatar_url} />
         </div>
     );
   } 

export default GithubApi;