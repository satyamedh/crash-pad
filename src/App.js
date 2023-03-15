import './App.css';
import './index.css';
import yes from './yes.png';
import no from './no.png'
import React, { useEffect } from 'react';
import mainimg from './main_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'


function App() {
  useEffect(() => {
    document.title = 'Crash pad';
  }, []);
  // random chance of 20% to redirect to rickroll if ?immune=1 is not in url
  if (Math.random() < 0.1 && window.location.href.indexOf('immune=1') === -1) {
    // redirect to rickroll
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
  return (
    <div className="App">
      {/*navbar*/}
      <ul className='flex bg-gray-700 text-white w-full'>
      <li><p className='text-5xl text-mono text-white ml-6 mt-1' style={{fontFamily: "Bebas Neue"}}>Crash pad</p> </li>
        <li id='mrl'><AnchorLink href='#packages'>Packages</AnchorLink></li>
        <li id='mrl mr-1 mt-auto'><AnchorLink href='#contact'>Contact</AnchorLink></li>
      </ul>

      <div className="card bg-gray-600">
      <img src={mainimg} alt='' className='card-img-top'></img>
  <div className="card-body">
    <p className='text-5xl text-mono text-white ml-6 mt-1' >Crash pad</p>
    <p className="card-text text-white mt-2 font-2xl" style={{fontFamily: "Rajdhani"}}>
      "The best place to crash"<br></br>
                              -- us
    </p>
    <AnchorLink href="#packages" className="btn btn-outline-info mt-10 text-2xl">Explore packages</AnchorLink>
  </div>
</div>
      <div className='flex justify-center'>
      </div>

      {/* make table */}
      <p className='text-left text-4xl text-mono text-white mt-56 ml-56'id='packages'>Packages</p>
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
          <tr className='bg-gray-500'>
            <td className='border px-4 py-2'>Price</td>
            <td className='border px-4 py-2'>$99.99</td>
            <td className='border px-4 py-2'>$199.99</td>
            <td className='border px-4 py-2'>$249.99</td>
          </tr>
          <tr className='bg-gray-400'>
            <td className='border px-4 py-2'>Breakfast</td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr className='bg-gray-500'>
            <td className='border px-4 py-2'>Dinner</td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr className='bg-gray-400'>
            <td className='border px-4 py-2'>Swimming pool</td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr className='bg-gray-500'>
            <td className='border px-4 py-2'>Room service</td>
            <td className='border px-4 py-2'><img src={no} alt='no' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr className='bg-gray-400'>
            <td className='border px-4 py-2'>Laundry</td>
            <td className='border px-4 py-2'><img src={no} alt='no' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={no} alt='np' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          <tr className='bg-gray-500'> 
            <td className='border px-4 py-2'>High tea</td>
            <td className='border px-4 py-2'><img src={no} alt='no' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={no} alt='no' className='mx-auto'></img></td>
            <td className='border px-4 py-2'><img src={yes} alt='yes' className='mx-auto'></img></td>
          </tr>
          </tbody>
      </table>
      </div>
      <p className='text-left text-xl text-mono text-white mt-1 ml-56'>*Car service available on request with additional cost</p>

      
      {/*contact us*/}
      <p className='text-left text-4xl text-mono text-white mt-10 ml-56'id='contact'>Contact us</p>
      <div className='flex my-2'>
        <p className='text-left text-xl text-mono text-white mt-1 ml-80'>Phone: Nope</p><br></br><br></br>
        <p className='text-left text-xl text-mono text-white mt-1 ml-80  mb-10'>Email: Don't have one</p>
        
      </div>

      {/*footer*/}
      <div className='flex justify-center'>
      <div className='bg-gray-600 w-full'>
      <p className='text-center text-xl text-mono text-white mt-1'>Made for the ICT project by Samhitha, Satyamedh, Shriyadita, Trisha, Vivan and Vidith</p>
        </div>
        </div>

    </div>
  );
}

export default App;
