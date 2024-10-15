import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { LoadProductButton, PageTitle, ProductCard } from "../components";

function OfferProductsPage() {
  const productList = [
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook skahkcfhgrvqebcxnxcbhfvbh",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      altMessage: "Laptop",
      productTitle: "HP Notebook",
      price: 1000,
      offerPrice: 500,
      offerPercentage: 50,
      categoryName: "Toys",
      categoryUrl: "#",
    },
  ];

  const headline = "Flash Sale";
  const [pagination, setPagination] = useState(4);
  const [buttonText, setButtonText] = useState("LOAD MORE...");

  const loadAll = () => {
    if (pagination === 4) {
      setPagination(productList.length); // Show all products
      setButtonText("LOAD LESS..."); // Update button to "LOAD LESS..."
    } else {
      setPagination(4); // Reset to showing 4 products
      setButtonText("LOAD MORE..."); // Update button to "LOAD MORE..."
    }
  };

  return (
    <MDBContainer fluid className="my-2">
      <PageTitle title={headline} />

      <MDBRow>
        {productList.slice(0, pagination).map((product, index) => (
          <MDBCol sm="6" md="4" lg="3" className="mb-3 pr-3 pl-3" key={index}>
            <ProductCard
              url={product.url}
              altMessage={product.altMessage}
              productTitle={
                (product.productTitle + " " + index).length <= 20
                  ? product.productTitle + " " + index
                  : product.productTitle.substring(0, 17) + "..."
              }
              price={product.price}
              offerPrice={product.offerPrice}
              offerPercentage={product.offerPercentage}
              categoryName={product.categoryName}
              categoryUrl={product.categoryUrl}
            />
          </MDBCol>
        ))}
      </MDBRow>

      <LoadProductButton onLoadProduct={loadAll} name={buttonText} />
    </MDBContainer>
  );
}

export default OfferProductsPage;
