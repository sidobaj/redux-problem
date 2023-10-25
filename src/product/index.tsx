import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../action";

const Product = () => {
  const dispatch = useDispatch();
  const data = [
    {
      name: "Shirt",
      price: "1000",
      image:
        "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?cs=srgb&dl=pexels-jeffrey-reed-769749.jpg&fm=jpg",
    },
    {
      name: "t-Shirt",
      price: "1500",
      image:
        "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?cs=srgb&dl=pexels-jeffrey-reed-769749.jpg&fm=jpg",
    },
  ];
  return (
    <div>
      <h1>Product</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {data.map((value, index) => {
          return (
            <div
              style={{
                width: "200px",
                height: "200px",
                background: "blue",
                borderRadius: "20px",
                border: "1px solid #ccc",
                display: "flex",
                flexDirection: "column",
                // padding: "5px",
              }}
            >
              <div style={{ paddingLeft: "40px", paddingTop: "10px" }}>
                <img
                  src={value.image}
                  alt={value.name}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {value.name}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {value.price}
              </div>
              <button
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  //   borderRadius: "30px",
                  width: "100px",
                }}
                onClick={() => dispatch(increment())}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
