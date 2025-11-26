import { memo } from 'react';
import { SearchIcon, ClearIcon } from '../icons';
import styles from './SearchBar.module.css';
import type { SearchBarProps } from '../../types/components.types';

export const SearchBar = memo<SearchBarProps>(({
  searchTerm,
  onSearchChange,
  resultCount,
  totalCount,
  isSearching = false,
}) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchIconWrapper}>
          <SearchIcon size={20} />
        </div>
        <input
          type="text"
          placeholder="Search by name, email, or company..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
        {isSearching && (
          <div className={styles.searchingIndicator}>
            <div className={styles.spinner}></div>
            <span>Searching...</span>
          </div>
        )}
        {searchTerm && !isSearching && (
          <button 
            onClick={() => onSearchChange('')}
            className={styles.clearButton}
            aria-label="Clear search"
          >
            <ClearIcon size={18} />
          </button>
        )}
      </div>
      <p className={styles.resultCount}>
        Showing {resultCount} of {totalCount} users
      </p>
    </div>
  );
});