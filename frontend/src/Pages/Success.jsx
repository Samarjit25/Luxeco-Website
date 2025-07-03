import React, { useEffect, useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timeoutId);
          navigate('/');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <div className="max-w-md">
        <img
          src="/success.png"
          alt="Success"
          className=" w-96 h-64 mb-1"
        />
        <h1 className="text-3xl font-semibold text-emerald-600 mb-2">Success!</h1>
        <p className="text-gray-600 mb-6">
          Redirecting to home page in <span className="font-bold">{countdown}</span> seconds...
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:bg-emerald-700 transition duration-300"
        >
          Back to Home
          <span className="ml-2">
            <HiOutlineArrowRight size={20} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Success;
