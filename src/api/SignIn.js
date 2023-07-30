import { ENDPOINTS } from '@/config/endpoints';
import axios from 'axios';

async function signIn(email, password) {
  try {
    const response = await axios.post(ENDPOINTS.AUTH.SIGN_IN, {
      identifier: email,
      password
    });

    // Assuming the API returns a JWT token upon successful authentication
    const token = response.data.jwt;

    // Store the token in local storage or session storage for future use
    localStorage.setItem('token', token);
    console.log(token)

    // Return the token to indicate successful sign in
    return token;
  } catch (error) {
    // Handle sign in error
    console.error('Error signing in:', error.response.data);
    throw new Error('Failed to sign in');
  }
}

export default signIn;