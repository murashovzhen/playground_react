import React, { useCallback, useState } from 'react'
import styles from './styles.module.scss'
import FormLayout from '../FormLayout'
import FormElement from '../FormElement'
import FormButton from '../FormButton'
//import { FormType } from '../../Types/Form'

const fakeApi = {
  login: async (login: string, password: string) => {
    debugger
    return login == 'admin' && password == 'admin'
  }
}

export type FormType = {
  email: string
  pass: string
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
    debugger
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

        <FormElement onChange={() => handleOnChange}
          //value={form.email}
          id={'email'}
          type={'text'}
          placeholder={'Your email'}
          label={'Email'} />

        <FormElement onChange={() => handleOnChange}
          //value={form.pass}
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
            <a href="#">{'Sign Up'} </a>
          </span>

        </div>
      </form>
    </FormLayout >

    // <div>
    //   <label htmlFor="login">
    //     <input value={form.login} onChange={handleOnChange}
    //       placeholder='login'
    //       id="login"
    //       type="text" />
    //   </label>

    //   <label htmlFor="pass">
    //     <input value={form.pass} onChange={handleOnChange}
    //       placeholder='pass'
    //       id="pass"
    //       type="text" />
    //   </label>

    //   <a href="">{'forgot password?'}</a>

    //   <button onClick={handleOnClick}>Login </button>

    //   <a href="">{'Don’t have an account? Sign Up'}</a>
    // </div>
  )
}

export default SingIn
