const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });
  const result = await response.text();
  return result;
};

export { postData };
