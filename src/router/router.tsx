import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "components/layout/Layout";
import { Home } from "pages/home/Home";
import { SearchResultPage } from "pages/search-results-page/SeachResultsPage";
import { ItemPage } from "pages/item-page/ItemPage";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="search/:query" element={<SearchResultPage />} />
          
          <Route path="item/:id" element={<ItemPage />} />
        </Route>
      </Routes>
    </>
  );
}

export { AppRouter };
