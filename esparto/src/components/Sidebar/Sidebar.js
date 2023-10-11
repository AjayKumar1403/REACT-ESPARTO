import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
       {/* //Varsha */}

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* //Sahithi */}
            {/* //Sai Vishnu */}
           {/* //Manoj Thella */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* //Sailaja */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;