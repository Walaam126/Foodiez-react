import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div class="row text-center mt-4">
        <h1>Foodiez</h1>
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div class="row ">
          <div className="col-6">
            <Link to="/categories/new/">
              <div class="card bg-dark text-black" style={{ width: "300px" }}>
                <img
                  src="https://thumbs.dreamstime.com/b/vegetarian-food-health-diet-nutrition-background-variety-fresh-farm-vegetables-around-blank-white-chalkboard-top-62732964.jpg"
                  class="card-img"
                  alt="..."
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 class="card-title text-center">Add Category</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/recipes/new">
              <div class="card bg-dark text-black" style={{ width: "300px" }}>
                <img
                  src="https://thumbs.dreamstime.com/b/vegetarian-food-health-diet-nutrition-background-variety-fresh-farm-vegetables-around-blank-white-chalkboard-top-62732964.jpg"
                  class="card-img"
                  alt="..."
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5
                    class="card-title text-center"
                    style={{ textDecoration: "none" }}
                  >
                    Add Recipe{" "}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
