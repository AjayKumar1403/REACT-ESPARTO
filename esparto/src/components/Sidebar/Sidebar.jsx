// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div
//       className="sidebar"
//       style={{ display: 'flex', overflow: 'scroll initial' }}
//     >
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         {
//           <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//             <a
//               href="/"
//               className="text-decoration-none"
//               style={{ color: 'inherit' }}
//             >
//               Sidebar
//             </a>
//           </CDBSidebarHeader>
//         }

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/tables" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink exact to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">
//                 Analytics
//               </CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink
//               exact
//               to="/hero404"
//               target="_blank"
//               activeClassName="activeClicked"
//             >
//               <CDBSidebarMenuItem icon="exclamation-circle">
//                 404 page
//               </CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         {
//           <CDBSidebarFooter style={{ textAlign: 'center' }}>
//             <div
//               style={{
//                 padding: '20px 5px',
//               }}
//             >
//               {/* Sidebar Footer */}
//             </div>
//           </CDBSidebarFooter>
//         }
//       </CDBSidebar>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleSidebar}>
        ☰
      </div>
      {isOpen && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
