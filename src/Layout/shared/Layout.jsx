import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex relative flex-row bg-background h-screen w-screen overflow-hidden">
      <div className="w-fit bg-bkg items-center h-screen overflow-y-auto">
        <SideBar />
      </div>
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
