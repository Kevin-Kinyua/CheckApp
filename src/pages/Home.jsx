import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import HospitalMenu from '../components/HospitalMenu'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <HospitalMenu/>
      <TopDoctors/>
      <Banner/>

    </div>
  )
}

export default Home