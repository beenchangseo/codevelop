//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{
      source: '/api/:path*',
      destination: `http://localhost:3001/:path*`,
    }];
  }
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// // const withCSS = require('@zeit/next-css');
//
// const nextConfig = {
//   reactStrictMode: true
// }
//
// module.exports = {
//   // nextConfig: nextConfig,
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://127.0.0.1:3001/:path*',
//         basePath: false
//       }
//     ]
//   }
//
//   // withCSS: withCSS({})
// }


/*
* 모나코 에디터 관련 자료
* https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=qls0147&logNo=221614459700
* https://mingule.tistory.com/75
* https://codesandbox.io/s/m6n38?file=/pages/index.tsx:46-52
* */