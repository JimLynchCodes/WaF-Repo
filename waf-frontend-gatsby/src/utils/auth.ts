import auth0 from "auth0-js"
import { navigate } from "gatsby"
// import { useDispatch } from 'react-redux';
import { loginSuccess } from "../state/actions/login";
// const dispatch = useDispatch();
// import store from './../state/createStore'
// import { dispatch } from 'redux';

import configureStore from "./../state/createStore"

const isBrowser = typeof window !== "undefined"

const auth: any = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN || "",
      clientID: process.env.AUTH0_CLIENTID || "",
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const tokens: any = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === "true"
}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => {}) => (err: any, authResult: any) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  console.log('got auth Result!', authResult)
  console.log('got auth userId!', authResult.idTokenPayload.sub)
  console.log('got auth!', authResult.idTokenPayload)

  console.log('identities!', authResult.identities)
  // console.log('identities!', authResult.identities.length)
  // console.log('identities!', authResult.identities[0])

  console.log('dispatching...1')
  const userObj: any = Object.assign({}, authResult.idTokenPayload, {userId: authResult.idTokenPayload.sub})

  console.log('dispatching...2')
  // const ok: any = (store as any)
  
  const store = configureStore()
  store.dispatch(loginSuccess(userObj))
  // console.log('dispatching...3')

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt: number = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", "true")
    navigate("/account")
    cb()
  }
}

export const silentAuth = (callback: any) => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", "false")
  auth.logout()
}
