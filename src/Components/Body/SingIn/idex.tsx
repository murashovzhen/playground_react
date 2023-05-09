import React from 'react'
import styles from './styles.module.scss'

const SingIn = () => {


  return (
    <div className={styles.singIn}>

      <div className={styles.singInTitle}>
        <span>Back to home</span>
        <h1>Sign In</h1>
      </div>

      {/* <form className={styles.singInBox}>

        <div className={styles.email}>
          <label>{title}</label>
          <input
            className={isError ? styles.error : ''}
            type="text"
            value={text}
            placeholder={placeholder} />
        </div>
        <div className={styles.password}>
          <label>{title}</label>
          <input
            className={isError ? styles.error : ''}
            type="text"
            value={text}
            placeholder={placeholder} />
          {
            isError && (
              <div className={styles.error}>
                {errorMessage}
              </div>
            )
          }
        </div>


        <input type="button" />
      </form> */}
    </div>
  )
}

export default SingIn
