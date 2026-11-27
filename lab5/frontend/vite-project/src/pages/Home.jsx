const Home = ({ SetLogin }) => {
  const handleLogout = () => {
    SetLogin(false);
  };

  return (
    <>
      <h1>Home Page</h1>
      
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;