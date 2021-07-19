import { createContext, useEffect, useState } from "react"
import axios from "axios";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
   // 5340d9ef15d84e0889ff8e6b833ef191
   const [data,setData] = useState()
   const apiKey = "5340d9ef15d84e0889ff8e6b833ef191";
   
   useEffect (() =>{
    axios
    .get(
        `https://newsapi.org/v2/everything?q=Apple&from=2021-07-19&sortBy=popularity&apiKey=${apiKey}`
    )
        .then(response =>setData(response.data))
    .catch((error) => console.log(error));
   },[])
   
   return(
       <NewsContext.Provider value={{data}}>
           {props.children}
       </NewsContext.Provider>
   )
}