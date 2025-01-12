import BlogSort from '@/components/blog/BlogSort';
import Header from '@/components/Header';
import Search from '@/components/ui/Search';
import { Suspense } from 'react';

export const metadata = {
  title: 'Blog',
  description: 'Blogs',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 text-secondary-700 mb-12 items-center">
          <Suspense>
            <Search />
          </Suspense>
          <Suspense>
            <BlogSort />
          </Suspense>
        </div>
        <div className="grid grid-cols-9 gap-8 mb-8">
          <main className="col-span-12 lg:col-span-8 xl:col-span-9">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
