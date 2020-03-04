import auth0 from "auth0-js"
import { navigate } from "gatsby"
import { loginSuccess, auth0LoginSuccess } from "../state/actions/login";
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

const setSession = (cb = () => { }) => (err: any, authResult: any) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  
  // console.log('identities!', authResult.identities)
  // console.log('identities!', authResult.identities.length)
  // console.log('identities!', authResult.identities[0])
  
  
  
  console.log('dispatching...1')
  const store = configureStore()
  // console.log('dispatching...3')
  console.log('dispatching...2', authResult)
  // const ok: any = (store as any)
  
  if (authResult && authResult.accessToken && authResult.idToken) {
    const userObj: any = Object.assign({}, authResult.idTokenPayload, { userId: authResult.idTokenPayload.sub })
    console.log('got auth Result!', authResult)
    console.log('got auth userId!', authResult.idTokenPayload.sub)
    console.log('got auth!', authResult.idTokenPayload)


    // setTimeout(() => {

      store.dispatch(auth0LoginSuccess(userObj))
    // }, 2000)
    
    let expiresAt: number = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", "true")
    // navigate("/browse-listings", {state: {user: 'foo'}})
    cb()
  }
  else {
    // navigate("/browse-listings")
    cb()

  }
}

export const silentAuth = (callback: any) => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {

  console.log('handling authentication...')
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
