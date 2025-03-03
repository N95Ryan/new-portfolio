// next.config.js
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // Your other Next.js configuration options
};

export default withNextIntl(nextConfig);