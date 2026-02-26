import { createMDX } from 'fumadocs-mdx/next';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
