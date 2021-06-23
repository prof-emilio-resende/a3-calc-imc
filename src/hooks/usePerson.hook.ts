import { useContext } from 'react';
import { PersonContext } from '../contexts/Person.context';

export const usePerson = () => {
  const ctx = useContext(PersonContext);

  return [
    ctx.person,
    ctx.setData
  ] as const;
}