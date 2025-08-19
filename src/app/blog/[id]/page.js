import React from 'react'

const blog ={

    101:{
        name:"today blog",
        details:"blog number 101"
    },
    102:{
        name:"15 Aug ",
        details:"blog number 102"
    },
    103:{
        name:"Rakhshabandhan",
        details:"blog number 103"
    }
}
const page = ({params}) => {

   const { id }=params;
   const blogPosts=blog[id];

  return (


    <>
    
    <h1 style={{ color: "#ffffff", fontSize: "1.8rem" ,fontWeight:"bold" }}>Blog Title : {blogPosts.name}</h1>
    <p>Blog details : {blogPosts.details}</p>
    
    </>
  )
}

export default page
