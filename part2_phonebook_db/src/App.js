import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Personsform from './components/Personsform'
import Filter from './components/Filter'

import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

const addNewPerson =(event) => {

  event.preventDefault()
const personCheck= persons.map(person => person.name)
const personObject= {

  name: newName,
  number: newNumber
}


personService
    .create(personObject)
      .then(returnedPerson => {

     
  

if (personCheck.includes(`${personObject.name}`))
window.confirm(`Name ${newName} already exists!`)


else

setPersons(persons.concat(returnedPerson))

setNewName('')
setNewNumber('')
})
}

const handleNameChange =(event) =>{
  console.log(event.target.value)
  setNewName(event.target.value)
}

const handleNumberChange = (event) =>{
  console.log(event.target.value)
  setNewNumber(event.target.value)
}

const handleWipeout = (id) => {
const dude = persons.find((dude) => dude.id === id)
const confirmWipe = window.confirm(`Delete ${dude.name} for real?`)

if (confirmWipe) {
  personService
  .remove(id)
  .then(() => {
    const leftPersons = persons.filter((person) => person.id !==id)
    setPersons(leftPersons)
  })
  .catch(error => {
   alert(
      `HELLO YOU!! Contact was already deleted from server`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 500)
  setPersons(persons.filter(p => p.id !== id))
})

}
}

const handleFilterChange =(event) =>{
  console.log('Typing filter input field', event.target.value)
  setNewFilter(event.target.value)
const rex = new RegExp(newFilter)
const searchkriteria = persons.filter(person => person.name.match(rex))
setPersons(searchkriteria)


}


  return (


  <div>

  <h1>PHONEBOOK DATABASE</h1>


<div>
  <ul>
{persons.map(person =>
  <Person key={person.id} person={person} handleWipeout={handleWipeout} />)}

  </ul>
</div>
<div>
<div>


</div>
  <Personsform onSubmit={addNewPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
  <Filter value={newFilter} onChange={handleFilterChange} />
 
  </div>
  </div>

)}

export default App