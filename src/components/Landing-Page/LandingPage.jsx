import React, {useState, useEffect } from 'react'
import Progressbar from './Progressbar';
import Main from './Main';
const LandingPage = () => {
    const [a, setA] = useState(100);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      if (a) {
        setTimeout(() => {
          setA(a - 1);
        }, 20);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    }, [a]);
  return (
    <>
     { loading ? <Progressbar value={100 - a} /> : <Main />}
    </>
  )
}

export default LandingPage
