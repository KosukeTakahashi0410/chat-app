import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div>
      <p>This is top page</p>
      <Link to="/signup">Got to Signup</Link>
    </div>
  );
}

export default Top