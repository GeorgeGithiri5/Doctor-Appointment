import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='navbar navbar-expand bg-dark d-flex align-items-center'>
                    <Link className='navbar-brand' to='/home'>
                        <span className='logo1'>Y</span><span className='logo2'>-Doc</span>
                    </Link>
                    <button type='button' className='navbar-toggler' data-target="#navbar" data-toggle='collapse'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className='nav navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link to='/home' className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/progress' className='nav-link'>Report</Link>
                            </li>
                            <li className='nav-item d-flex align-items-center'>
                                    <Link to='/home' className='btn btn-warning mx-1 d-flex align-items-center' style={{borderRadius:'50%',width:40,height:40,color:'white'}}>

                                    </Link>
                                    <p style={{color:"white"}}>George</p>
                            </li>
                        </ul>
                    </div>
                </nav>  
            </>
        );
    }
}

export default Navbar;