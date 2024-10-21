import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <h1 className="text-7xl font-bold mb-6 animate-pulse">404</h1>
      <h2 className="text-3xl mb-4">Oops! The page you are looking for does not exist.</h2>
      <p className="text-lg mb-10 text-gray-400">It seems like the page you are trying to reach is no longer available or never existed.</p>
      
      <Link href="/" className="px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-500 transition duration-300 ease-in-out">
          Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
