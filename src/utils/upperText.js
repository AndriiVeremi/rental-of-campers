export const upperText = data => {
  if (data.length === 0) {
    return data;
  } else {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }
};
