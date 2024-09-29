export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const saveAccessToken = (token) => {
  localStorage.setItem('accessToken', token); 
};

export const clearAccessToken = () => {
  localStorage.removeItem('accessToken'); 
};
