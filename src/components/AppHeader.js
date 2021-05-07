import Logo from '../assets/images/logo.png';

const AppHeader = () => {
    return(
        <header>
            <div id='logo' className='left'>
                <img src={Logo} alt='Logo' />
                </div>
                <div className='left-text'>
                <h2>Redux-React App</h2>
            </div>
        </header>
    )
}

export default AppHeader;