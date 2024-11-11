import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';

// The login view
function LoginPage() {
  const { user, logout, isLoggedIn } = useAuth();

  return (
    <div>
      <div>
        <h2>Login</h2>
        <h1>
          {isLoggedIn ? 'You are currently logged in' : 'You are not logged in'}
        </h1>
      </div>
      {isLoggedIn ? (
        <div>
          <LogoutButton onClick={logoutAction} />
        </div>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}
const LogoutButton = ({ onClick }) => (
  <button onClick={onClick}>
    Log out
  </button>
);

// The login form
function LoginForm({ setIsLoggedIn }) {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [canSubmit, setCanSubmit] = useState(false);
  const forgotPasswordUrl = '#';

  // Handler for the login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('starting login...');
      const user = await login({ email, password });
      // Do something with the user here...
      console.log('user: ', user);
      setIsLoggedIn(true);
      setHasError(false);
      console.log('logged in');
    } catch (err) {
      console.log('login failed: ' + err.message);
      setHasError(true);
    }
  };

  // Enable the submit button on all fields filled
  useEffect(() => {
    if (email?.length && password?.length) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [email, password]);

  return (
    <form onSubmit={handleSubmit}>
      {hasError && (
        <div>
          There was an error with your login.
        </div>
      )}
      <div>
        <label
          htmlFor="username"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="******************"
          onChange={(e) => setPassword(e.target.value)}
        />
        {hasError && (
          <p>
            Please choose a password.
          </p>
        )}
      </div>
      <div>
        <button
         type="submit"
         disabled={!canSubmit}
        >
          Sign In
        </button>
        <a
          href={forgotPasswordUrl}
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
}
export default LoginPage;