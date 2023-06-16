import { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'
import { AppDispatch } from '../../../Store'
import { activationAction } from '../../../Store/registration/actions'
import genericStyles from '../../../App.module.scss'
import FormElement from '../FormElement'
import FormLayout from '../FormLayout'
import FormButton from '../FormButton'

export const ActivatePage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const [activationLink, setActivationLink] = useState<string>("")
    const onChangeFormElement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setActivationLink(e.target.value)
    }, [activationLink])

    const onClick = () => {
        if (activationLink) {
            const uidToken = activationLink.replace('http://studapi.teachmeskills.by//activate/', '').split("/");
            dispatch(activationAction(uidToken[0], uidToken[1], () => navigate('/success')))
        }
    }

    const breadcrumbs = [<Link to="/" className={genericStyles.link}>Back to Home</Link>]

    return (
        <FormLayout
            title={'Activation work around'}
            breadcrumbs={breadcrumbs}
        >
            <div className={genericStyles.row}>
                <div className={[genericStyles.col_12, genericStyles.m_t_25, genericStyles.content_center].join(' ')}>
                    <span className={genericStyles.help_text}>
                        For activate your accoun please insert activation link from email to form bellow
                    </span>
                </div>
            </div>
            <div className={genericStyles.row}>
                <div className={genericStyles.col_12}>
                    <FormElement
                        onChangeFunction={onChangeFormElement}
                        type={'text'}
                        placeholder={'Activation link'}
                        label={'Activation link'}
                        value={''}
                        name={'link'}
                        component='TextBox'
                    />
                </div>
            </div>
            <div className={genericStyles.row}>
                <div className={genericStyles.col_12}>
                    <FormButton onClick={onClick}
                        text="Activate"
                        type={'button'}
                    />
                </div>
            </div>
        </FormLayout>
    )
}

