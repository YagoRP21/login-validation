
interface IProps {
    isMobile: boolean
    closeMobileMenu: () => void
}


const MenuMobile = (props: IProps) => {
    return (
        <>
            <section className="mobile-navbar">

            <nav id="navigation">
                <ul id="menu">
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="./">HOME</a></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="./">ABOUT</a></li>
                    <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="./">CONTACT</a></li>
                </ul>
            </nav>  

            </section>
        </>
    )
}

export default MenuMobile