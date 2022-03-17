import React from "react";
import { SearchResultItem } from "components/SearchResultItem";
import { useSearchResults } from "hooks/useSearchResults";

function SearchResultPage() {
  const results = useSearchResults();

  console.log(results, "results SearchResultPage");

  return (
    <>
      <div className="container">
        <h3 className="results-title">
          Resultados:
          <span className="results-count">{results.length}</span>
        </h3>

        <div className="results">
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
