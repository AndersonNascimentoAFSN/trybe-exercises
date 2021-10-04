const login = (user) => {
  if (!user) return {
    err: {
      message: 'username or password is not valid',
      code: 'user_Not_Found'
    }
  }
  return {};
}

module.exports = {
  login,
}