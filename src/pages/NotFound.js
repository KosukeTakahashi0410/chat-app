import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry! Can't find your requested page.</p>
      <Link to="/">Got to Top</Link>
    </div>
  );
}

export default Top