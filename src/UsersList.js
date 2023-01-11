import { Link } from "react-router-dom";

function UsersList() {
  // TODO:Fetch actual users in useEffect
  return (
    <ul>
      <li><Link to='/users/1'>User 1</Link></li>
      <li><Link to='/users/2'>User 2</Link></li>
      <li><Link to='/users/3'>User 3</Link></li>
    </ul>
  )
}

export default UsersList;