import React from "react";
import { useNavigate, Link } from "react-router-dom";

function SearchForm() {
  console.log("render SearchForm");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = e.target.product.value;
    console.log(product, "product submit");

    navigate("/search/" + product, { replace: true });
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          name="product"
          type="text"
          className="search-input"
          placeholder=" Buscar productos, marcas y más..."
          required
        />

        <button className="search-button">BUSCAR</button>
      </form>
    </>
  );
}

export { SearchForm };
