import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

export default function RootLayout() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>

        </>

    )
}


library.add(fab, fas, far)
