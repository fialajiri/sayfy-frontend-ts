export const maxLength = (value: string, maxSize: number) => {
  const stripedValue = stripHtml(value);
  console.log(stripedValue.length)
  return stripedValue.length <= maxSize;
};

export const minLenght = (value: string, minSize = 0) => {
  const stripedValue = stripHtml(value);
  return stripedValue.length > minSize;
};

export const stripHtml = (value: string) => {
  if (value === null || value === "") {
    return "";
  }
  return value
    .toString()
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/[\n\r]/g, " ")
    .replace(/&nbsp;/g, " ");
};
