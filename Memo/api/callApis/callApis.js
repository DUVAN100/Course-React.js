export const callApi = async (endpoint) => {
  const request = await fetch(endpoint);
  const responseData = await request.json();
  return responseData;
};
