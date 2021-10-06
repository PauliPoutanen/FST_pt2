import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  {name: 'Arto Hellaz', number: '050-555555'}, 
  {name: 'Ada Poutanen', number: '0600-46463464'},
  {name: 'Mark de Villeneuve', number: '050-3355335'},
  {name: 'Mark la Belleveuve', number: '056-3367444'}
]
ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)