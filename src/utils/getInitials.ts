export function getInitials(name: string, maxLength: number = 2): string {
  if (!name || name.trim().length === 0) {
    return '?';
  }

  const words = name.trim().split(/\s+/);
  
  const initials = words
    .map((word) => word.charAt(0).toUpperCase())
    .filter((char) => /[A-Z]/.test(char))
    .slice(0, maxLength)
    .join('');

  return initials || '?';
}