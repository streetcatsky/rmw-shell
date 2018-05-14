import React, { Component } from 'react'
import firebaseui from 'firebaseui'
import 'firebase/auth'

let authUi = null

export class AuthUI extends Component {
  componentDidMount () {
    const { firebaseApp, uiConfig } = this.props

    // let authUi = null

    console.log(firebaseApp.auth())

    try {
      if (!firebaseui.auth.AuthUI.getInstance()) {
        authUi = new firebaseui.auth.AuthUI(firebaseApp.auth())
        authUi.start('#firebaseui-auth', uiConfig)
      } else {
        // console.log(firebaseui.auth)
      }
    } catch (err) {
      console.warn(err)
    }
  }

  componentWillUnmount () {
    try {
      authUi.reset()
    } catch (err) {
      console.warn(err)
    }
  }

  render () {
    return (
      <div style={{ paddingTop: 35, width: '100%' }}>
        <div id='firebaseui-auth' style={{ width: '100%' }} />
      </div>

    )
  }
}

export default AuthUI
