import Header from './Header';
const Layout = ({ children }) => {

    return (
        <>
            <Header navPosition="right" className="reveal-from-bottom" />
            <main className="site-content">
                {children}
            </main>
            {/* <Banner /> */}
            {/* <Footer /> */}
        </>
    )
};

export default Layout;