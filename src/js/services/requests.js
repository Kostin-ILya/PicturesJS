const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });

  const result = await response.text();
  return result;
};

const getResources = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
  const result = await response.json();
  return result;
};

export { postData, getResources };
