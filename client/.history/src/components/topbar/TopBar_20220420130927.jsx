import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = true;
        return (
        <div className='top'>
            <div className="topLeft">
                <i class="topIcon fa-brands fa-twitter"></i>
                <i class="topIcon fa-brands fa-facebook"></i>
                <i class="topIcon fa-brands fa-pinterest"></i>
                <i class="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                    <Link to="/">HOME</Link>    
                    
                    </li>
                    <li className='topListItem'> 
                    <Link  to={'/contact'} className='link'>CONTACT</Link>
                    
                    </li>
                    <li className='topListItem'> 
                    <Link  to={'/write'} className='link'>WRITE</Link> 
                    
                    </li>
                    <li className='topListItem'> 
                    <Link  to={'/about'} className='link'>ABOUT</Link> 
                    
                    </li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}    
                    </li>
                    
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className='topImg' src='http://images.vogue.it/users/media/a/amirhossein.png?v=1467238729' alt="img" />
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <link className='link' to='/login'>LOGIN</link>
                            </li>
                            <li className='topListItem'>
                                <link className='link' to={'/register'}>REGISTER</link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    )
}
