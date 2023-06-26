import { refreshTockenAction } from '../Store/authentication/actions';
import { Action, Dispatch, Middleware, Store, applyMiddleware } from "redux";
import { AppState } from '../Store';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export const jwtRefreshMiddleware: Middleware = (store) => (next) => (action) => {
    var authState = store.getState().authentication;
        if (authState.isAuthenticated) {

            if (authState.tokens.access) {
                 const decoded = jwtDecode(authState.tokens.access) as JwtPayload;

                 refreshTockenAction(authState.tokens.refresh);
                 return next(action);   
                 

                // if (decoded && decoded.exp && decoded.exp - moment().unix() < 10) {

                // }
            }
        }
    return next(action);  
};


// const jwtRefreshMiddleware = (store: Store<AppState>) => (next: Action) => (action) => {
//     if (typeof action === 'function') {
//         const accessToken = store.getState().authentication.access;
//         if (accessToken) {
//             const decoded = jwtDecode(accessToken) as JwtPayload;
//             if (decoded && decoded.exp && decoded.exp - moment().unix() < 10) {
//                 refreshTockenAction(store.getState().authentication.refresh)
//                 return next(action); 
//             }
//         }
//     }
//     return next(action);
// }



export default jwtRefreshMiddleware;