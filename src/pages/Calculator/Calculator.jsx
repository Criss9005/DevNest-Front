import React from 'react'
import Calculate from 'components/Calculate/DailyAddCalculate'
import Header from 'components/Header/headerComponent'
//import MenuLogged from 'components/Menu/MenuLogged'

export default function Calculator() {
  return (
    <div>
      {/* <MenuLogged/> */}
      <Header/>
      <Calculate/>
    </div>
  )
}
