import React from "react";
import { SearchForm } from "./SearchForm";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <SearchForm></SearchForm>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export { Layout };
