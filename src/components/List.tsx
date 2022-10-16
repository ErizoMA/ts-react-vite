import { FC } from "react"
import { User } from "../types";
interface Props {
  users: Array<User>
}
const List: FC<Props> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.nick}>
          <img src={user.avatar} />
          <h2>{user.nick}</h2>
          <h3>{user.description}</h3>
        </li>
      ))}
    </ul>
  )
}

export default List

