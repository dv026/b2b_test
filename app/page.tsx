import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Articles",
  description: "List of articles",
  openGraph: {
    title: "Articles",
    description: "List of articles",
    type: "article",
    locale: "en_US",
    url: "http://localhost:8080",
    siteName: "b2b_test"
  },
};

export { Home as default } from '@/features/home/Home'