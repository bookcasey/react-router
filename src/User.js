import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  console.log(typeof userId, userId);

  useEffect(() => {
    // Fetch user info for userId
    async function fetchUser() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();

      console.log(data);
      setUser(data);
    }
    fetchUser();
  }, [userId]);

  return (
    <div>
      <h2>User: {user.name}</h2>

    </div>
  )
}

export default User;