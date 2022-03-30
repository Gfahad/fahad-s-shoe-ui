// import { product } from "prelude-ls";
import React from "react";
// import Myproduct from "../product.JSON";

function Products() {
  console.log("hello");
  const [productsALL, setProductsALL] = React.useState([]);
  const [productsFILTERED, setProductsFILTERED] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fahad-shoes-service.herokuapp.com/products/")
      .then((response) => response.json())
      .then(setProductsALL);
  }, []);

  console.log(productsALL);
  console.log(productsALL.filter((p) => p.Price > 10));

  // const data = require("../product.JSON");
  return (
    <div className="product">
      <section className="products">
        {productsALL.map((product) => (
          <div className="shoe-wrapper">
            <div className="shoe-container">
              <div>{product.ProductName}</div>
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
