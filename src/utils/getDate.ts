export const getDate = () => {
  const today = new Date()
  // const dd = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()
  return `${year}-${month}`
}
