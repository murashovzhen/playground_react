import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import genericStyles from '../../../App.module.scss'
import FormLayout from '../FormLayout'
import FormElement from '../FormElement'
import FormButton from '../FormButton'
import { FormType } from '../../../Types/Form'
import { Link, useNavigate } from 'react-router-dom'
import { registrationAction } from '../../../Store/registration/actions'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../Store'

const SingUp = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [form, setForm] = useState<FormType>({
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
  })

  const [formErrors, setFormErrors] = useState<Partial<FormType>>({})
  const errors = useSelector((state: AppState) => state.registration.errors)

  useEffect(() => {
    setFormErrors({
      ...formErrors,
      email: errors?.email?.join("; "),
      password: errors?.password?.join("; "),
      username: errors?.username?.join("; ")
    })

  }, [errors])

  const onChangeFormElement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormErrors({})
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }, [form, setForm])

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password, username, confirmPassword } = form
    setFormErrors({
      ...formErrors,
      password: !password ? 'Password is requed' : "",
      email: !email ? 'email is requed' : "",
      username: !username ? 'username is requed' : "",
      confirmPassword: !password ? 'confirmPassword is requed' : password !== confirmPassword ? 'Passwords do not match' : "",
    })

    if (email && password && username && password === confirmPassword) {
      const regSuccess = () => navigate('/registrationConfirmation')

      dispatch(registrationAction(username, email, password, regSuccess))
    }
  }

  const breadcrumbs = [<Link to="/" className={genericStyles.link}>Back to Home</Link>]

  return (
    <FormLayout
      title={'Sign Up'}
      breadcrumbs={breadcrumbs}
    >
      <div className={[genericStyles.row].join(' ')}>
        <div className={[genericStyles.col_lg_7, genericStyles.offset_lg_2_5, genericStyles.col_12].join(' ')}>
          <form onSubmit={onFormSubmit} className={[genericStyles.bordered_box, styles.sing_in_box].join(' ')} >
            <div className={genericStyles.row}>
              <div className={genericStyles.col_12}>
                <FormElement
                  onChangeFunction={onChangeFormElement}
                  type={'text'}
                  placeholder={'Your name'}
                  label={'Name'}
                  value={''}
                  name={'username'}
                  component='TextBox'
                  error={formErrors.username}
                />
              </div>
            </div>
            <div className={genericStyles.row}>
              <div className={genericStyles.col_12}>
                <FormElement
                  onChangeFunction={onChangeFormElement}
                  type={'text'}
                  placeholder={'Your email'}
                  label={'Email'}
                  value={''}
                  name={'email'}
                  component='TextBox'
                  error={formErrors.email}
                />
              </div>
            </div>
            <div className={genericStyles.row}>
              <div className={genericStyles.col_12}>
                <FormElement
                  onChangeFunction={onChangeFormElement}
                  type={'password'}
                  placeholder={'Your password'}
                  label={'Password'}
                  value={''}
                  name={'password'}
                  component='TextBox'
                  error={formErrors.password}
                />
              </div>
            </div>
            <div className={genericStyles.row}>
              <div className={genericStyles.col_12}>
                <FormElement
                  onChangeFunction={onChangeFormElement}
                  type={'password'}
                  placeholder={'Confirm password'}
                  label={'Confirm password'}
                  value={''}
                  name={'confirmPassword'}
                  component='TextBox'
                  error={formErrors.confirmPassword}
                />
              </div>
            </div>
            <div className={genericStyles.row}>
              <div className={genericStyles.col_12}>
                <FormButton
                  text="Sign Up"
                />
              </div>
            </div>
            <div className={genericStyles.row}>
              <div className={[genericStyles.col_12, genericStyles.m_t_25, genericStyles.content_center].join(' ')}>
                <span className={genericStyles.help_text}>
                  Already have an account?
                  <Link to="/singin" className={genericStyles.link}>
                    <a href="#" className={genericStyles.link}> Sign In</a>
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormLayout >
  )
}

export default SingUp


