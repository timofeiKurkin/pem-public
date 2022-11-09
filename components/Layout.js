import Header from './Header'
import Footer from './Footer'
import Head from "next/head";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useEffect, useState} from "react";


const Layout = ({children, media}) => {
    const defaultTitle = 'Главная | ПромЭлектроМонтаж'

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 800)
    }, [open])

    return (
        <>
            <Head>
                <title>{defaultTitle}</title>
            </Head>
            <div className='next'>
                <div className='curtains'>
                    <div className={open ? 'curtains__topActive' : 'curtains__top'}></div>
                </div>
                <div className='wrapper'>
                    <Header props={media}/>
                    {/*<SwitchTransition>*/}
                    {/*    <CSSTransition*/}
                    {/*        key={pathname}*/}
                    {/*        timeout={0}*/}
                    {/*        classNames="page"*/}
                    {/*        unmountOnExit*/}
                    {/*    >*/}
                            {children}
                    {/*    </CSSTransition>*/}
                    {/*</SwitchTransition>*/}
                    <Footer props={media}/>
                </div>
            </div>
        </>
    );
};

export default Layout;