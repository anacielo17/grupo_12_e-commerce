import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">



                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}

                <Link to ="/products">Products </Link>

                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <Link to ="/userList">Usuarios </Link>
                <hr className="sidebar-divider my-0" />

                
            </ul>
            {/*<!-- End of Sidebar -->*/}

        </>
    )
}
export default SideBar;