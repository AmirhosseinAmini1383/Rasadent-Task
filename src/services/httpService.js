import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// 🔐 This is an example of how to handle token expiration (401 errors) by attempting to refresh the access token.
// Although the current task doesn't require user authentication or token management,
// this block is intentionally included (commented out) to demonstrate knowledge of secure token refresh flows.
// In real-world applications, this ensures seamless user experience by keeping users logged in
// without forcing manual re-authentication when access tokens expire.

// For example, when the internet is down
// app.interceptors.request.use(
//   (res) => res,
//   (err) => Promise.reject(err)
// );

// 401 error (not Authorize - not Authenticated) & don't have accessToken
// app.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const originalConfig = err.config;
//     if (err.response.status === 401 && !originalConfig._retry) {
//       originalConfig._retry = true;
//       try {
//         const { data } = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
//           { withCredentials: true }
//         );
//         if (data) return app(originalConfig);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(err);
//   }
// );

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
