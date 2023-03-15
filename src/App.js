import './App.css';
import './index.css';
import yes from './yes.png';
import no from './no.png'
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = 'Crash pad';
  }, []);
  // random chance of 50% to redirect to rickroll if ?immune=1 is not in url
  if (Math.random() > 0.5 && window.location.href.indexOf('immune=1') === -1) {
    // redirect to rickroll
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
  return (
    <div className="App">
      
      <p className='text-center text-6xl text-mono text-white'>Crash pad</p>

      <p>I'll insert img here later</p>

      {/* make table */}
      <p className='text-left text-3xl text-mono text-white mt-96 ml-56'id='packages'>Packages</p>
      <div className='flex justify-center my-2'>
      <table className='table-auto text-white' width='75%'>
        <thead>
          <tr>
            <td className='border px-4 py-2 bg-orange-500 text-2xl'>Feature</td>
            <td className='border px-4 py-2 bg-orange-500 text-2xl'>1 Day package</td>
            <td className='border px-4 py-2 bg-orange-500 text-2xl'>2 Day package</td>
            <td className='border px-4 py-2 bg-orange-500 text-2xl'>3 Day package</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>Price</td>
            <td className='border px-4 py-2'>TODO</td>
            <td className='border px-4 py-2'>TODO</td>
            <td className='border px-4 py-2'>TODO</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Breakfast</td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Dinner</td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Swimming pool</td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Room service</td>
            <td className='border px-4 py-2'><img src={no} alt='no' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Laundry</td>
            <td className='border px-4 py-2'><img src={no} alt='no' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={no} alt='np' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>High tea</td>
            <td className='border px-4 py-2'><img src={no} alt='no' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={no} alt='no' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          </tbody>
      </table>
      </div>
      <p className='text-left text-xl text-mono text-white mt-1 ml-56'>*Car service available on request with additional cost</p>

      
    </div>
  );
}

export default App;
