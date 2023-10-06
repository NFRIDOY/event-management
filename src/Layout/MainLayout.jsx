import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import { createContext, useState } from 'react';
import Footer from '../Footer/Footer';

export const DonationContext = createContext([]);

export default function MainLayout() {

  const [allDonations, setAllDonations] = useState([]);

  return (
    // <div className='max-w-7xl mx-auto py-9'>
    <div className='mx-auto'>
      {/* {allDonations} */}
      {
        // allDonations.map((donate)=> donate)
        // console.log(allDonations)
      }
      <Header></Header>
      <DonationContext.Provider value={[allDonations, setAllDonations]}>
        <Outlet></Outlet>
      </DonationContext.Provider>
      <Footer></Footer>
    </div>
  )
}
