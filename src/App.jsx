import { useState } from 'react'
import Login from './components/Login/login.js'
import ProtectedPages from './ProtectedPages.jsx'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Callback for successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onSuccessLogin={handleLoginSuccess} />
      ) : (
        <ProtectedPages onLogout={handleLogout} />
      )}
    </>
  )
}


export default App;



