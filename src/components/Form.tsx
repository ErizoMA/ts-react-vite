import React, { FC, useReducer, useState } from "react"
import useNewUser from "../hooks/useNewUser"
import { User } from "../types"

interface Props {
  onNewUser: (newUser: User) => void
}
const Form: FC<Props> = ({ onNewUser }) => {
  const [inputValues, dispatch] = useNewUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewUser(inputValues)
    dispatch({ type: "clear" })

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch({ type: "change_value", payload: { inputName: name, inputValue: value } })
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