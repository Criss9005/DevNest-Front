import React from 'react'
import DailyCaloriesForm from 'components/DailyCaloriesForm'
import MenuLogged from 'components/Menu/MenuLogged'

export default function Calculator() {
  return (
    <div>
      <MenuLogged/>
      <DailyCaloriesForm/>
    </div>
  )
}
