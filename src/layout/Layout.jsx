const Layout = ({ children }) => {

    return (
        <>
            {/* <Header navPosition="right" className="reveal-from-bottom" /> */}
            <div>
                My Header
            </div>
            <main className="site-content">
                {children}
            </main>
            {/* <Banner /> */}
            {/* <Footer /> */}
        </>
    )
};

export default Layout;