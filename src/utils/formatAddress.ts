import type { Address } from "../types/user.types";

export const formatAddress = (address: Address): string => {
  const addressParts = [
    address.street,
    address.suite,
    address.city,
    address.zipcode,
  ];

  return addressParts.join(', ');
};
