import { Authenticated, Unauthenticated, useQuery } from 'convex/react';
import { SignIn, SignInWithEmail, SignOut } from './components/AuthComponents';
import { api } from '../convex/_generated/api';
import './css/App.css';

export default function App() {
  const viewer = useQuery(api.users.viewer);

  return (
    <>
      <Unauthenticated>
        <div className="signin-container">
          <h2>Sign In</h2>
          <SignIn />
          <SignInWithEmail />
        </div>
      </Unauthenticated>
      
      <Authenticated>
        <div className="homepage-container">
          <h1>Welcome, {viewer?.name}</h1>
          <SignOut />
        </div>
      </Authenticated>
    </>
  );
}
