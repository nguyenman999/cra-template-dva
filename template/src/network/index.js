const handleError = async response => {
  if (response.headers.get('Content-Type').includes('application/json')) {
    const error = await response.json();
    console.log('Network parse json data success:', error);
    return { error };
  }
  return { error: response };
};

const handleSuccess = async response => {
  if (response.headers.get('Content-Type').includes('application/json')) {
    const data = await response.json();
    console.log('Network parse json data success:', data);
    return { data };
  }
  return { data: response };
};

export const makeUrl = (baseUrl, url) => {
  return `${baseUrl}/${url}`;
};

export const request = async (url, options) => {
  try {
    console.log('Network request:', options);
    const response = await fetch(url, options);
    console.log('Network response:', response);
    if (response.ok) {
      return handleSuccess(response);
    }
    return handleError(response);
  } catch (error) {
    console.log('Network error:', error);
    return handleError(error);
  }
};
