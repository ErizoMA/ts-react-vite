import React, { FC, useState } from "react"
import { User } from "../types"

interface FormState {
  inputValues: User
}

interface Props {
  onNewUser: (newUser: User) => void
}
const INITIAL_STATE = {
  nick: "",
  avatar: "https://i.pravatar.cc/400?img=70",
  description: ""
}
const Form: FC<Props> = ({ onNewUser }) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewUser(inputValues)
    handleClear()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const handleClear = () => {
    setInputValues(INITIAL_STATE)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='nick' placeholder='nick' value={inputValues.nick} onChange={handleChange} />
      <input type='text' name='avatar' placeholder='avatar' value={inputValues.avatar} onChange={handleChange} />
      <input type='text' name='description' placeholder='description' value={inputValues.description} onChange={handleChange} />
      <button>Save user</button>
    </form>
  )
}

export default Form