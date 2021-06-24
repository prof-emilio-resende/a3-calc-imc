import { useContext } from 'react';
import { UserContext } from '../contexts/User.context';

export const useUser = () => {
  const ctx = useContext(UserContext);

  return [
    ctx.user,
    ctx.setUser,
    ctx.resetUser,
  ] as const;
}