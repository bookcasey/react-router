import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);
  // TODO: Fetch actual users in useEffect
  useEffect(() => {
    // It is the place for side effects (fetch requests, changing the title, etc)
    // Hook into the React lifecycle (component is mounted, unmounted, specific props/state change)
    const abortController = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
          signal: abortController.signal
        });
        const data = await response.json();

        // console.log(data);
        setUsers(data);
      } catch (error) {
        if (error.name === 'AbortError') { }
        else {
          throw error
        }
      }
    }
    fetchUsers();

    console.log('useEffect ran');

    return () => {
      console.log('cleanup function ran');
      abortController.abort();
    }
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
    </ul>
  )
}

export default UsersList;