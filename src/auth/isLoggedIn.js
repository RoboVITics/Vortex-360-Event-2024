import React from 'react'

const isLoggedIn = () => {
  // Attempt to fetch the cookie
  const token = document.cookie;
  // If the token exists, return true
  if (token) {
    return true;
  }
  
  // Else, return false
  return false;
}

export default isLoggedIn;