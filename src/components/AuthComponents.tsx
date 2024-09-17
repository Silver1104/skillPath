// src/components/AuthComponents.tsx
import React from 'react';
import { useAuthActions } from '@convex-dev/auth/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import '../css/AuthComponents.css';

export const SignIn: React.FC = () => {
  const { signIn } = useAuthActions();
  return (
    <Button onClick={() => void signIn('github')}>Sign in with GitHub</Button>
  );
};

export const SignInWithEmail: React.FC = () => {
  const { signIn } = useAuthActions();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        void signIn('resend', formData);
      }}
    >
      <Input name="email" placeholder="Email" type="text" />
      <Button type="submit">Send sign-in link</Button>
    </form>
  );
};

export const SignOut: React.FC = () => {
  const { signOut } = useAuthActions();
  return <Button onClick={() => void signOut()}>Sign out</Button>;
};
