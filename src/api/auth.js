import http from '@/api/http';

export async function auth(
  login,
  password,
) {
  let { data } = await http.post('auth', {
    login,
    password,
  });
  console.log("🚀 ~ file: auth.js ~ line 15 ~ data", data)

  
  return data;
}
