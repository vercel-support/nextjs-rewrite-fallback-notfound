module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://www.google.com/:path*`,
        },
      ],
    };
  },  
}
