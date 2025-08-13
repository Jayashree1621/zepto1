import React from 'react'
import { createPortal } from 'react-dom'

const Portal = () => {

    const Popup = () => {
        return(
            <>
            <section>
                <aside><h1>WELCOME TO SIGN-UP PAGE</h1></aside>
                <aside>
                    <div>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div>
                        <input type="password" placeholder='Enter your password' />
                    </div>
                </aside>
                <aside>
                    <button>SUBMIT</button>
                </aside>
            </section>
            </>
        )
    }
  return createPortal(<Popup />, document.getElementById('portal'))
}
export default Portal

