import { useState } from "react"
import { List, X } from 'phosphor-react'
import MenuDesktop from "./menu-desktop/MenuDesktop"
import MenuMobile from "./menu-mobile/MenuMobile"
import MobileHeader from "./menu-mobile/MobileHeader"

const Header = () => {
    const [ open, setOpen ] = useState(false)

    const hamburguerIcon = <span className='hamburguer-icon'
                            onClick={() => setOpen(!open)} >
                                <List size={32}  /> 
                           </span>

    const closeIcon = <span className='close-icon'
                      onClick={() => setOpen(!open)} >
                        <X size={32} />
                      </span>


    const closeMobileMenu = () => setOpen(false);

    return (
        <>
            <section className="top">
                <div className="center">

                    <MenuDesktop />
                    <MobileHeader />
                    {open ? closeIcon : hamburguerIcon}
                    {open && <MenuMobile isMobile={true} closeMobileMenu={closeMobileMenu} /> }
                </div>
            </section>
        </>
    )
}

export default Header