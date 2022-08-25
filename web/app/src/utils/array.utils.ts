export const first = <T>(array?: T[]) => (array && array.length > 0 ? array[0] : undefined);

export const last = <T>(array?: T[]) => (array && array.length > 0 ? array[array.length - 1] : undefined);
