import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <h1>Blog</h1>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;

