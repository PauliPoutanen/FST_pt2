import React, { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Personsform from './components/Personsform'

const App = (props) => {

  const [ persons, setPersons] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')

 
const addNewPerson= (event) => {
  event.preventDefault()
  console.log('AddName-button-pressed', event.target)
  const personsLog = persons.map(person => person.name)




  const personObject={
    name:newName,
    number:newNumber
  }


if (personsLog.includes(`${personObject.name}`))
window.confirm(`Name ${newName} already exists!`)

else

  
  setPersons(persons.concat(personObject))
  setNewName('')
  setNewNumber('')
}

const handleNameChange = (event) =>{
  console.log(event.target.value)
setNewName(event.target.value)
}


const handleNumberChange = (event) =>{
  console.log(event.target.value)
setNewNumber(event.target.value)
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
      <h2>Phonebook</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </ul>
      
      
      <h2>Numbers</h2>

   

      <Filter value={newFilter} onChange={handleFilterChange} />
      <Personsform onSubmit={addNewPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      
    </div>
  )

}

export default App