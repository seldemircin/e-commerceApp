import Navbar from "./components/Navbar";
import RouteConfig from "./config/RouteConfig";
import Loading from "./components/Loading";
import CardList from "../src/components/CardList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function App() {
  const { productsInCard } = useSelector((store) => store.card);
  const calculateTotalPrice = () => {
    let price = 0;
    for (let i = 0; i < productsInCard.length; i++) {
      price += productsInCard[i].count * productsInCard[i].price;
    }
    return price;
  };

  return (
    <div>
      <Navbar />
      <Loading />
      <RouteConfig />

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample2"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {productsInCard.length > 0 ? (
          <div
            className="offcanvas-body d-flex justify-content-between align-items-center"
            style={{ flexDirection: "column" }}
          >
            <CardList products={productsInCard} />
            <div className="w-100">
              <div className="mb-4 d-flex justify-content-between align-items-center w-100 border p-1 border-end-0 border-start-0">
                <p>Total Price</p>
                <span className="fw-medium">{calculateTotalPrice()} $</span>
              </div>
              <div>
                <button className="btn btn-dark w-100">Go to Payment</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-100 text-center">
            <Link to={"/"}>
              <span className="text-primary">
                The basket's empty! Let's start buying something.
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
