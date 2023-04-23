export const loginAPI = async (username: string, password: string) => {
  const url =
    'https://jl0qxmh3o5.execute-api.ap-southeast-1.amazonaws.com/v1/sign-in';
  const body = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch {
    return null;
  }
};
