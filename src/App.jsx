import { useState } from 'react'
// import './App.css'
import './sass/main.scss'
// import './sass/hero.scss'
import Hero from './components/Hero'
import AboutMarci from './components/AboutMarci'
import GetItSold from './components/GetItSold'
import SearchListings from './components/SearchListings'
import LogoList from './components/LogoList'
import Gallery from './components/PhotoGallery'
import Service from './components/Service'
import CallOrVisit from './components/CallOrVisit'
import Map from './components/Map'


function App() {

  return (
    <div className="App">
      <Hero />
      <AboutMarci />
      <GetItSold />
      <SearchListings />
      <LogoList />
      <Gallery />
      <Service />
      <CallOrVisit />
      <Map />
    </div>
  )
}

export default App
