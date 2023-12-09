import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const App = () =>{
 const[courses,setCourses] = useState(null);
 const[loading, setLoading] = useState(true);
 const[category,setCategory]= useState(filterData[0].title);
  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save date into variable//
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);

 return (
  <div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
    <Navbar/>
    </div>
   
    <div className="bg-bgDark2">
    <div>
     <Filter 
    filterData ={filterData}
    category={category}
    setCategory={setCategory}
    />
     </div>
    

    <div className="w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h-[50vh]">
   {
    loading? (<Spinner/>):(<Cards courses={courses} category={category}/>)
   }
    </div>
    </div>
  </div>
 );
 
};


export default App;
