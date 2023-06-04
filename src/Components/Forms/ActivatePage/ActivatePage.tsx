import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch } from '../../../Store'
import { activationAction } from '../../../Store/registration/actions'

// - ссылка по почте для активации пользователя
// http://studapi.teachmeskills.by//activate/NjMyOQ/boyyxv-c0f36d8cfdd50203c7bdd061cd469781
// подставляем http://localhost:3000/ 
// вместо http://studapi.teachmeskills.by//
// http://localhost:3000/activate/NjMyOQ/boyyxv-c0f36d8cfdd50203c7bdd061cd469781

// POST / auth / users / activation / (активация пользователя, данные из ссылки по почте)
// {"uid": "NjMyOQ",
//  "token": "boyyxv-c0f36d8cfdd50203c7bdd061cd469781"}

export const ActivatePage = () => {
    const { uid, token } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    // если есть ошибки, забрать их из стора и показать. если нет, то переходит на 'success'

    useEffect(() => {
        if (uid && token) {
            dispatch(activationAction(uid, token, () => navigate('/success')))
        }
    }, [uid, token])

    return (
        <div>
            ActivatePage
        </div>
    )
}

