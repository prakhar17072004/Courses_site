import React, { useState } from "react";
import Card from "./Card";

const Cards =({courses,category})=>{
    let allCourses = [];
    const [likedCourses, setLikedCourses] = useState([]);

    // returns you list of all courses recirved from the api response//
    function getCourses(){
        if(category ==="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            //main sirf specfic category ka data arrray pass karunga
            return courses[category];
        }
        
    }
    
    
    
    
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
    {
    getCourses().map((course)=>{
        return(<Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses} 
            setLikedCourses={setLikedCourses}/>)
    })
      }
    </div>
    )
    
}

export default Cards;