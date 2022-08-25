export const firstLatterToLowerCase = (str: string | undefined | null) => {
  if (!str) {
    return '';
  }

  return str.charAt(0).toLocaleLowerCase() + str.slice(1);
};
