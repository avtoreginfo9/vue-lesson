import http from '@/api/http';

export async function auth({ login, password, isAuth }) {
  let { data } = await http.post('auth/login', {
    login: login,
    password: password,
    isAuth: isAuth,
  });

  return data;
}

export async function logOut({ token }) {
  let tokenOut = token;
  const config = {
    headers: {
      Authorization: 'Bearer ' + tokenOut,
    },
  };
  let { data } = await http.post('auth/logout', '', config);

  return data;
}

export async function check({ token }) {
  console.log('🚀 ~ file: auth.js ~ line 14 ~ check ~ { token }', { token });
  let { data } = await http.post('auth/me', { token });
  return data;
}
