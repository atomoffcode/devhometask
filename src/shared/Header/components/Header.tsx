import React from 'react'
import './Header.scss';
import '../../../assets/css/style.scss';
import Logo from '../../../assets/photos/Logo.png';
import SearchIco from '../../../assets/photos/Search Icon.png';
import CartIco from '../../../assets/photos/Cart Icon.png';
import { Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <div className="header">
        <div className="h-all">
            <div className="h-left">
                <div className="logopic">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="logo"><p>Organick</p></div>
            </div>
            <div className="h-middle">
                <Link to='/'>Home</Link>
                <a href="/#">About</a>
                <a href="/#">Pages</a>
                <Link to='/shop'>Shop</Link>
                <a href="/#">Projects</a>
                <a href="/#">News</a>
            </div>
            <div className="h-right">
                <div className="search">
                    <input type="text" />
                    <div className="sicon">
                        <img src={SearchIco} alt="" />
                    </div>
                </div>
                <div className="cart">
                    <div className="cicon">
                        <img src={CartIco} alt="" />
                    </div>
                    <p>Cart (<span>0</span>)</p>
                </div>
            </div>
            <div className="hidden">
                <div className="h-middle">
                    <p><a href="index.html">Home</a></p>
                    <p><a href="">About</a></p>
                    <p><a href="">Pages</a></p>
                    <p><a href="">Shop</a></p>
                    <p><a href="">Projects</a></p>
                    <p><a href="">News</a></p>
                </div>
                <div className="h-right">
                    <div className="search">
                        <div className="sicon">
                            <img src={SearchIco} alt="" />
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cicon">
                            <img src={CartIco} alt="" />
                        </div>
                        <a href=""><p>Cart (<span>0</span>)</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
