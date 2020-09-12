import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Watches/GW/unrec/Sept/GW_PC_BUNK_watches1500x600._CB405140901_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id={1}
            title="For efficient home working"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id={1}
            title="Editor's corner | Handpicked eBooks for the reader in you"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Ebooks/202007/pc_low._SY304_CB409836418_.jpg"
            price={10.69}
            rating={3}
          />
          <Product
            id={1}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            price={239}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={1}
            title="Exercise gloves"
            image="https://images-eu.ssl-images-amazon.com/images/I/41GR0aNdlrL._AC_SY200_.jpg"
            price={2.88}
            rating={5}
          />
          <Product
            id={1}
            title="Covid mask"
            image="https://images-eu.ssl-images-amazon.com/images/I/31gu65u1gkL._AC_SY200_.jpg"
            price={6.69}
            rating={2}
          />
          <Product
            id={1}
            title="Electronics & more Under"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/under1499store/hindi/Gateway/updated/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB406499939_.jpg"
            price={15.29}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={1}
            title="Home furnishing"
            image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            price={120.09}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
