import React from "react";

const Header = ({course}) => {

  return (
    <h1>{course.name}</h1>
  
   
  )
}

const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}
const ContentToo = ({parts}) => {
return (
  <div>
{parts.map((part, i) =>
<Part key={i} part={part.name} exercises={part.exercises}/>
)}</div>
  )}


const Count =({parts}) =>{
  const allset = parts.reduce((sum, part) => sum + part.exercises,0)
  return (
    <p><b>Exercises in total:</b> {allset}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <ContentToo parts={course.parts} />
      <Count parts={course.parts} />

    </div>
  )
}
export default App;
