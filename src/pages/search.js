// import React, { useState } from 'react'
// import { useGetAllProductQuery } from '../services/api.get';

// const Search = () => {
    
//     const [query, setQuery] = useState("");
//     const {isLoading, isError, data} = useGetAllProductQuery();
//     const searchBar = (e) =>{
//        setQuery(e.target.value)
//     }

//     //filter data 
   
//   return (
//      <>
//       <input type='text' onChange={searchBar} />
//       <h2>{query}</h2>
// {
//     isLoading ? <h1>hey</h1> :isError ? <h1>error</h1> :(
//         <div>
//             {
//                 itmesFilter?.map((item)=>(
//                     <h1>{item.title}</h1>
                    
//                 ))
//             }
//         </div>
//     )
// }
//      </>
//   )
// }

// export default Search
