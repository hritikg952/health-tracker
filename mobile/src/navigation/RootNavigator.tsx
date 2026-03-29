import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './TabNavigator'
import { SignInPage } from '../pages/auth/SignInPage'

export function RootNavigator() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <NavigationContainer>
      {isSignedIn
        ? <TabNavigator />
        : <SignInPage onSignIn={() => setIsSignedIn(true)} />
      }
    </NavigationContainer>
  )
}
