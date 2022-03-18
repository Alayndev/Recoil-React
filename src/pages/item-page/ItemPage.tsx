import React from "react";
import { Item } from "components/item/Item";
import { useSearchItem } from "hooks/useSearchItem";

function ItemPage() {
  const results = useSearchItem();

  console.log(results, "results ItemPage");

  return (
    <>
      <div>
        {results.map((i) => (
          <Item
            key={i.id}
            title={i.title}
            price={i.price}
            pictures={i.pictures}
            link={i.link}
            warranty={i.warranty}
          />
        ))}
      </div>
    </>
  );
}

export { ItemPage };
