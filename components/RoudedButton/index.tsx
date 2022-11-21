import React from 'react'
import styles from './RoudedButton.module.css'

const RoudedButton: React.FC<{title: string}> = ({title}) => {
  return (
    // <div className={styles.buttonContainer}>
      <button className={styles.button}>
        {title}
      </button>
    // </div>
  )
}

export default RoudedButton