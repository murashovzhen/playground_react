
import { RoutesConstants } from '../../Constants/RouteConstants'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../Store'



const Header = () => {

    const authentificationState = useSelector((state: AppState) => state.authentication)


    return (
        <nav className="navbar navbar-dark bg-dark flex-grow-1 text-right position-fixed start-0 end-0">

            {!authentificationState.isAuthenticated &&
                <Link to={RoutesConstants.SignIn} className="btn btn-primary float-end ms-auto flex-nowrap"> Sign In</Link>

            }
            {authentificationState.isAuthenticated &&
                <span className="float-end ms-auto flex-nowrap">
                    {authentificationState.user?.username ?? authentificationState.user?.email}
                </span>
            }

        </nav>
    )
}

export default Header
