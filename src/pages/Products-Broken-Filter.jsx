// import { product } from "prelude-ls";
import React from "react";
// import Myproduct from "../product.JSON";

function Products() {
  console.log("hello");
  const [productsALL, setProductsALL] = React.useState([]);
  const [productsFILTERED, setProductsFILTERED] = React.useState([]);
  const [minPrice, setMinPrice] = React.useState(-1);
  const [maxPrice, setMaxPrice] = React.useState(-1);
  const [nameFilter, setNameFilter] = React.useState("");

  var filterProducts = function (p) {
    if (
      minPrice > -1 &&
      maxPrice > -1 &&
      (p.Price < minPrice || p.Price > maxPrice)
    ) {
      return false;
    }

    if (
      nameFilter &&
      nameFilter.length > 0 &&
      p.ProductName.indexOf(nameFilter) == -1
    ) {
      return false;
    }

    return true;
  };

  React.useEffect(() => {
    fetch("http://localhost:8000/products/")
      .then((response) => response.json())
      .then(setProductsALL);
  }, []);

  React.useEffect(() => {
    setProductsFILTERED(
      productsALL.filter((p) => {
        filterProducts(p);
      })
    );
  }, [minPrice, setMinPrice, productsALL, filterProducts]);

  React.useEffect(() => {
    setProductsFILTERED(
      productsALL.filter((p) => {
        filterProducts(p);
      })
    );
  }, [maxPrice, setMaxPrice, productsALL, filterProducts]);

  React.useEffect(() => {
    setProductsFILTERED(
      productsALL.filter((p) => {
        filterProducts(p);
      })
    );
  }, [nameFilter, setNameFilter]);

  console.log(productsALL);
  console.log(productsALL.filter((p) => p.Price > 10));

  // const data = require("../product.JSON");
  return (
    <div className="product">
      <section id="products-filter">
        <p>
          Price:{" "}
          <input
            id="min-price-filter"
            id="min-price-filter"
            value={minPrice}
            onInput={(e) => setMinPrice(e.target.value)}
          />{" "}
          -{" "}
          <input
            id="max-price-filter"
            id="max-price-filter"
            value={maxPrice}
            onInput={(e) => setMaxPrice(e.target.value)}
          />
        </p>
        <p>
          Name:{" "}
          <input
            id="name-filter"
            name="name-filter"
            value={nameFilter}
            onInput={(e) => setNameFilter(e.target.value)}
          />
        </p>
      </section>
      <section className="products">
        {productsFILTERED.map((product) => (
          <div className="shoe-wrapper">
            <div className="shoe-container">
              <div>{product.title}</div>
              <img className="shoe-image" alt="" src={product.Images} />
              <p className="shoe-description">{product.Description}</p>
              <div className="shoe-price">{product.Price}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Products;
