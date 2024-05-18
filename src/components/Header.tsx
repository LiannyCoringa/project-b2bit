import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <header>
      <button onClick={ handleClick }>Logout</button>
    </header>
  );
}

export default Header;
