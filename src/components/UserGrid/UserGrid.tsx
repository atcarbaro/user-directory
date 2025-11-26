import { useState, useCallback } from 'react';
import { UserCard } from '../UserCard/UserCard';
import styles from './UserGrid.module.css';
import type { UserGridProps } from '../../types/components.types';

export const UserGrid = ({ users, loading, error }: UserGridProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = useCallback((userId: number) => {
    setExpandedId((prevId) => (prevId === userId ? null : userId));
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>Error: {error}</p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className={styles.emptyContainer}>
        <p className={styles.emptyText}>No users found matching your search.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isExpanded={expandedId === user.id}
          onToggle={() => handleToggle(user.id)}
        />
      ))}
    </div>
  );
};