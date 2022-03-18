import React from "react";
import css from "./home.css";

function Home() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>
          Hace tu búsqueda desde la caja de búsqueda
        </h1>
      </div>
    </>
  );
}

export { Home };
