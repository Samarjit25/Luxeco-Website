import React, { useEffect, useState } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
  const [countdown, setCountdown]=useState(10);
  const navigate=useNavigate();

  useEffect(()=>{
    const timeoutId= setInterval(()=>{
      setCountdown((preCount)=>{
        if(preCount === 1){
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount-1;
      });
    }, 1000);
    return()=>clearInterval(timeoutId);
  },[navigate]);

  return (
    <>
    <section className="notFound">
      <div className="container">
        <img src="/success.png" alt="success" />
        <p>Redirecting to home page in {countdown} seconds....</p>
        <Link to={"/"}>Back to Home<HiOutlineArrowRight/></Link>
      </div>
    </section>
    </>
  );
  
};

export default Success;
