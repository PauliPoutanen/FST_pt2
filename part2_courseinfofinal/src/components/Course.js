import React from 'react'
import Content from './Content'





const Course =({courses}) =>
<div>
{courses.map(course =>
<div key={course.id}>
  <Content parts={course.parts}/>
  </div>
  )}


</div>


export default Course
