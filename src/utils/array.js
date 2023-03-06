export const shuffled = (list) => {
  return list.sort(() => 0.5 - Math.random())
}