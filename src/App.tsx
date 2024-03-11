import { Routes, Route } from 'react-router-dom'

import './globals.css'

import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes - Everyone can see the route, such as sign in/out */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        {/* private routes - Only signed in can see this route */}
        {/* Routh with 'index' is the starting point */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
