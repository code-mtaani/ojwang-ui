export const getToken = () => {
  const session = JSON.parse(localStorage.getItem('session'))
  if (session?.access) {
    return session.access
  }

  return false
}