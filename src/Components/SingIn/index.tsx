import React, { useCallback, useState } from 'react'
import styles from './styles.module.scss'
import FormLayout from '../FormLayout'
import FormElement from '../FormElement'
import FormButton from '../FormButton'
import { FormType } from '../../Types/Form'


const fakeApi = {
  login: async (login: string, password: string) => {
    return login == 'admin' && password == 'admin'
  }
}

const SingIn = () => {
  const [form, setForm] = useState({
    email: '',
    pass: ''
  } as FormType)

  const handleOnClick = useCallback(() => {
    fakeApi.login(form.email, form.pass)
      .then(result => alert(result ? 'Вы вошли' : 'Поробуйте еще раз'))
  }, [form])

  const handleOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }, [form])

  return (
    <FormLayout
      title={'Sign In'}
      breadcrumbs={['Back to Home']}>
      <form className={styles.singInBox}>
        <FormElement onChangeFunction={handleOnChange}
          id={'email'}
          type={'text'}
          placeholder={'Your email'}
          label={'Email'} />
        <FormElement onChangeFunction={handleOnChange}
          id={'pass'}
          type={'text'}
          placeholder={'Your password'}
          label={'Password'} />
        <div className={styles.singInBox_footer}>
          <a href="#">{'Forgot password?'}</a>
          <FormButton onClick={handleOnClick}
            text="Sign In" />
          <span>
            {'Don’t have an account?'}
            <a href="#">{' Sign Up'} </a>
          </span>
        </div>
      </form>
    </FormLayout >
  )
}

export default SingIn
