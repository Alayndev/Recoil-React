import React from "react";
import { SearchResultItem } from "components/search-result-item/SearchResultItem";
import { useSearchResults } from "hooks/useSearchResults";
import css from "./searchResultsPage.css";

function SearchResultPage() {
  const results = useSearchResults();

  console.log(results, "results SearchResultPage");

  return (
    <>
      <div className={css.container}>
        <h3 className={css.resultsTitle}>
          Resultados:
          <span>{results.length}</span>
        </h3>

        <div>
          {results.map((r) => (
            <SearchResultItem
              key={r.id}
              id={r.id}
              title={r.title}
              price={r.price}
              img={r.thumbnail}
              link={r.permalink}
              stock={r.available_quantity}
              sold={r.sold_quantity}
              condition={r.condition}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export { SearchResultPage };
