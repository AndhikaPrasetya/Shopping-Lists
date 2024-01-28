import React from 'react'
import noData from "../../assets/no-data.svg"
import styles from "./Empty.module.css"

const Empty = () => {
  return (
    <div>
        <img className={styles.img} src={noData} alt="" />
    </div>
  )
}

export default Empty