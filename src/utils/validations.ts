export const isEmpty = (value: string) => {
  return !(value.trim().length > 0);
};

export const validStringRange = (params: {min?: number; max: number; value: string}) => {
  const {min = 0, max, value} = params;
  return value.length >= min && value.length <= max;
};
