import { Link, useLocation } from 'react-router-dom'

const Error = props => {
  const location = useLocation()

  return (
    <div>
      <h1>Error page</h1>
      <p>{location.state.errorMessage}</p>
      <Link to="/signup">Got to Signup</Link>
    </div>
  );
}

export default Error