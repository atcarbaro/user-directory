import type { UserCardProps } from '../../types/components.types';
import { getInitials } from '../../utils/getInitials';
import { ChevronDownIcon } from '../icons';
import { UserDetails } from '../UserDetails/UserDetails';
import {
  Card,
  CardHeader,
  Avatar,
  ExpandIcon,
  UserInfo,
  UserName,
  UserEmail,
  UserCompany,
} from './UserCard.styles';

export const UserCard = ({ user, isExpanded, onToggle }: UserCardProps) => {
  const initials = getInitials(user.name);

  const handleClick = () => {
    onToggle(user.id);
  };

  return (
    <Card onClick={handleClick} isExpanded={isExpanded}>
      <CardHeader>
        <Avatar>{initials}</Avatar>
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
          <UserCompany>{user.company.name}</UserCompany>
        </UserInfo>
        <ExpandIcon isExpanded={isExpanded}>
          <ChevronDownIcon />
        </ExpandIcon>
      </CardHeader>
      {isExpanded && <UserDetails user={user} />}
    </Card>
  );
};