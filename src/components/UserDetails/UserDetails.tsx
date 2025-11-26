import type { UserDetailsProps } from '../../types/components.types';
import { formatAddress } from '../../utils/formatAddress';
import styles from './UserDetails.module.css';

export const UserDetails = ({ user }: UserDetailsProps) => {
  const fullAddress = formatAddress(user.address);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailRow}>
        <span className={styles.detailLabel}>Address:</span>
        <span>{fullAddress}</span>
      </div>
      <div className={styles.detailRow}>
        <span className={styles.detailLabel}>Phone:</span>
        <span>{user.phone}</span>
      </div>
      <div className={styles.detailRow}>
        <span className={styles.detailLabel}>Website:</span>
        <a 
          href={`https://${user.website}`} 
          target="_blank" 
          className={styles.detailLink}
        >
          {user.website}
        </a>
      </div>
    </div>
  );
};