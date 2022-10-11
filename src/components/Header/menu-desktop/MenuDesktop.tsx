

const MenuDesktop = () => {
    return (
      <>
        <section className="desktop-navbar">
          <header>
              <div className="logo">
                  <a href="/"><img src="/logo.png" width="70px" /></a>
              </div>
          </header>
          <ul className="menu--desktop">
              <li><a href="./">HOME</a></li>
              <li><a href="./">ABOUT</a></li>
              <li><a href="./">CONTACT</a></li>
          </ul>
        </section>
      </>  
    )
}

export default MenuDesktop