import type { User } from "./user.types";

export interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  resultCount: number;
  totalCount: number;
  isSearching?: boolean;
}

export interface UserCardProps {
  user: User;
  isExpanded: boolean;
  onToggle: (userId: number) => void;
}

export interface UserDetailsProps {
  user: User;
}

export interface UserGridProps {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}
