import type { User } from '../types/user.types';

export const filterUsers = (users: User[], searchTerm: string): User[] => {
  if (!searchTerm.trim()) return users;

  const lowerSearch = searchTerm.toLowerCase();

  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(lowerSearch) ||
      user.email.toLowerCase().includes(lowerSearch) ||
      user.company.name.toLowerCase().includes(lowerSearch)
  );
};