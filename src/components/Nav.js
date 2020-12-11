import { Link } from 'react-router-dom'

function Nav(){
    return(
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/pastprojects">Past Projects</Link></li>
      </ul>
    )
}

export default Nav;