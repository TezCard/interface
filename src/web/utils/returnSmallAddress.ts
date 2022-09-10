export const getSmallAddress = (address: string) =>
  address ? address.slice(0, 5) + '...' + address.slice(-6) : 'Collect Wallet';
