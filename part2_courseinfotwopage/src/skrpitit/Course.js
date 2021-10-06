import React from 'react'

const Course = ({ courses }) => 
    
<div>
  <ul>
{courses.map(course =>
<div key={course.id}>
<Header course={course.name} />
<Content parts={course.parts}/>
<Count parts={course.parts}/>
</div>
)}
</ul>
</div>


const Header= ({ course }) => {
  
    return (
      <div><h2>
  {course}</h2>
  </div>
  )
  }
  
const Count= ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
     <p>
  Exercises total {total}</p>
  
  )
  }
  
const Content = ({ parts }) => {
    
    return (
      <div>
  {parts.map((part, i) => 
  <Part key={i} part={part.name} exercises={part.exercises} />
  )}
  </div>
  )
  }
  
const Part = ({ part, exercises }) => {
    
    return (
      <div>
  
  <p>{part}   {exercises}</p>
  
  
      </div>
    )
  }
  

 
  
export default Course