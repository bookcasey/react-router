import { useHistory } from "react-router-dom";

function PostForm() {

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: implement post creation

    // Redirect to homepage
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default PostForm;