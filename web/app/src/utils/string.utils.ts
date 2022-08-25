export const truncate = (str: string | undefined | null, count: number) => {
  if (!str) {
    return '';
  }

  if (str.length < count) {
    return str;
  }

  return str.substring(0, count).concat('...');
};

export const firstLatterToCapital = (str: string | undefined | null) => {
  if (!str) {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const firstLatterToLowerCase = (str: string | undefined | null) => {
  if (!str) {
    return '';
  }

  return str.charAt(0).toLocaleLowerCase() + str.slice(1);
};
