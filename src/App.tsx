import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { User } from "./types";

interface State {
  users: User[]
}
function App() {
  const [users, setUsers] = useState<State['users']>([])

  const handleNewUser = (newUser: User): void => {
    setUsers(users => [...users, newUser])
  }

  return (
    <div className="App">
      <List users={users} />
      <Form onNewUser={handleNewUser} />
    </div >
  )
}

export default App
