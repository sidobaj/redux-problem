export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const addItem = (
  data: { name: string; age: number; sex: string } | undefined,
) => ({
  type: "ADDITEM",
  payload: data,
});
