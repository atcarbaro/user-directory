import { useState, useMemo, useCallback } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { UserGrid } from './components/UserGrid/UserGrid';
import { useUsers } from './hooks/useUsers';
import { useDebounce } from './hooks/useDebounce';
import { filterUsers } from './utils/filterUsers';
import styles from './App.module.css';

function App() {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  const isSearching = searchTerm !== debouncedSearchTerm;

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const filteredUsers = useMemo(
    () => filterUsers(users, debouncedSearchTerm),
    [users, debouncedSearchTerm]
  );

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>User Directory</h1>
        <p className={styles.subtitle}>Search and explore our user database</p>
      </header>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        resultCount={filteredUsers.length}
        totalCount={users.length}
        isSearching={isSearching}
      />

      <UserGrid users={filteredUsers} loading={loading} error={error} />
    </div>
  );
}

export default App;