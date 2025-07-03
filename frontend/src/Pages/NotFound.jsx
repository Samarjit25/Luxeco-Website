
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
      <div className="max-w-md">
        <img
          src="https://res.cloudinary.com/dz2mlxltd/image/upload/v1751546617/output-onlinegiftools_b4ivux.gif"
          alt="Page Not Found"
          className="w-full max-w-xs mx-auto mb-6"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Even John Travolta can't find the page you are looking for.
        </p>
        
        <a
          href="/"
          className="inline-flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:bg-emerald-700 transition duration-300"
        >
          Back to Home
          <span className="ml-2">
            <HiOutlineArrowNarrowRight size={20} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default NotFound;
