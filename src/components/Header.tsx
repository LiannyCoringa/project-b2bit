function Header() {
  const handleClick = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <header>
      <button onClick={ handleClick }>Logout</button>
    </header>
  );
}

export default Header;
