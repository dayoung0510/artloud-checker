export const getDate = () => {
  const date = new Date();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${month}/${day}`;
};

//nn:nn 형식으로 만들기
export const getTime = (value: string) => {
  return [value.slice(0, 2), ":", value.slice(2)].join("");
};
