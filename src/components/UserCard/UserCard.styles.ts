import styled from 'styled-components';

export const Card = styled.div<{ isExpanded: boolean }>`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border: 2px solid ${(props) => (props.isExpanded ? '#054A91' : '#81A4CD')};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(5, 74, 145, 0.15);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(5, 74, 145, 0.25);
    border-color: #054A91;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #054A91 0%, #3E7CB1 50%, #81A4CD 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(5, 74, 145, 0.3);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const UserName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #054A91;
  font-weight: 600;
`;

export const UserEmail = styled.p`
  margin: 0;
  color: #3E7CB1;
  font-size: 0.9rem;
`;

export const UserCompany = styled.p`
  margin: 0;
  color: #81A4CD;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ExpandIcon = styled.div<{ isExpanded: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color:#054A91;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
  transition: all 0.3s ease;
  transform: ${(props) => (props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  
  &:hover {
    transform: ${(props) => 
      props.isExpanded 
        ? 'rotate(180deg) scale(1.1)' 
        : 'rotate(0deg) scale(1.1)'
    };
  }
`;