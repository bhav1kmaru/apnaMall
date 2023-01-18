import React from 'react'
import { DataArray1, DataArray2, DataArray3 } from './data'
import Slider from './Slider'
import styles from '../../styles/format.module.css'
const HomePage = () => {
  return (
    <div className={styles.home_background}>
      <Slider DataArray={DataArray1} />
      <Slider DataArray={DataArray2} />
      <Slider DataArray={DataArray3} />
    </div>
  )
}

export default HomePage