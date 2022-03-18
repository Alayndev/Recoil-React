import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppRouter } from "router/router";
import { Loader } from "components/loader/Loader";
import "./index.css";

// Recoil
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <Suspense fallback={<Loader />}>

      <HashRouter>
        <AppRouter />
      </HashRouter>

    </Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);

// HashRouter instead of BrowserRouter because of GitHub Pages
