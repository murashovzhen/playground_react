import React, { useCallback, useState } from 'react'
import styles from './styles.module.scss'
import genericStyles from '../../../App.module.scss'
import FormLayout from '../FormLayout'
import FormButton from '../FormButton'
import { Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../../Store'

const RegistrationConfirmation = () => {
  const reg = useSelector((state: AppState) => state.registration.user)
  const navigate = useNavigate()
  const onClickNavigate = () => navigate('/')

  const breadcrumbs = [<Link to="/" className={genericStyles.link}>Back to Home</Link>]

  return (
    <FormLayout
      title={'Registration Confirmation'}
      breadcrumbs={breadcrumbs}
    >
      <div className={[genericStyles.row].join(' ')}>
        <div className={[genericStyles.col_lg_7, genericStyles.offset_lg_2_5, genericStyles.col_12].join(' ')}>
          <form className={[genericStyles.bordered_box, styles.sing_in_box].join(' ')}>
            <div className={genericStyles.row}>
              <div className={[genericStyles.col_12, genericStyles.m_t_25, genericStyles.content_center].join(' ')}>
                <span className={genericStyles.help_text}>
                  Please activate your account with the activation link in the email
                  <a href="#" className={genericStyles.link}> {reg?.email}</a>. Please, check your email
                </span>
              </div>
            </div>
            <div className={genericStyles.row}>
              <div className={genericStyles.col_12}>
                <FormButton onClick={onClickNavigate} disabled={true}
                  text="Go to home"
                />
              </div>
              <div className={genericStyles.col_12}>
                <FormButton onClick={() => navigate('/activate')}
                  text="Activation work around"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormLayout >
  )
}

export default RegistrationConfirmation


