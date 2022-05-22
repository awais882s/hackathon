import React from "react";
import "../Header/style.css";
import "../Bootstraps/index.css";
// import abc from "./Assets/abc.jpg";
// import abcd from "./Assets/abcd.jpg";
// import efg from "./Assets/efg.jpg";
export default function Header() {
  return (
    <div>
      <header id="alert-header">
        <div class="container">
          <div class="row">
            <div class="col">
              <div
                class="alert alert-info mb-0 px-0 alert-dismissible fade show border-0"
                role="alert"
              >
                HURRY ! Check Out Our New Products{" "}
                <a href="javascript:void(0)" class="alert-link">
                  Check Now
                </a>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header class="position-sticky top-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div class="container">
            <a class="navbar-brand" href="#">
              Shopping Website
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active custom-nav"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active custom-nav"
                    href="javascript:void(0)"
                  >
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active custom-nav"
                    href="javascript:void(0)"
                  >
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active custom-nav"
                    href="javascript:void(0)"
                  >
                    LogIn
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-primary text-white" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Main Content --> */}
      <main>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/tkf7agzwy0nkvwwtysxb/design-your-shopping-store-banner-sliders.png"
                class="d-block w-100"
                alt="place"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-dark" style={{ fontSize: "35px" }}>
                  First slide label
                </h5>
                <p class="text-dark" style={{ fontSize: "35px" }}>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://i.pinimg.com/originals/79/98/e4/7998e4aa36f6bf78c6b15d6d30e279cf.jpg"
                class="d-block w-100"
                alt="girls"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-dark" style={{ fontSize: "35px" }}>
                  Second slide label
                </h5>
                <p class="text-dark" style={{ fontSize: "20px" }}>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://i.pinimg.com/originals/b6/c9/17/b6c9173bd58f62f49eb550635a5e259f.jpg"
                class="d-block w-100"
                alt="nature"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="text-dark" style={{ fontSize: "35px" }}>
                  Third slide label
                </h5>
                <p class="text-dark" style={{ fontSize: "35px" }}>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- Products --> */}
        <div class="py-5 products main-prodcuts">
          <div class="container">
            <div class="conatiner">
              <div class="row mb-4">
                <div class="col-sm-12 col-md-10 offset-md-1 text-center">
                  <h1>Our Products</h1>
                  <p style={{ fontSize: "20px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse dolor incidunt delectus perspiciatis modi
                    necessitatibus iste culpa. Ad et a quam nisi, dicta, eius
                    excepturi unde, voluptas laborum eaque iure?
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0 ">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB18RLtd.z.BuNjt_j7q6x0nFXaY/Casual-Women-Shoes-Women-Flats-Canvas-Shoes-Fashion-Women-Sneakers-Lace-Up-Cartoon-Ladies-Board-Shoes.jpg"
                    class="card-img-top"
                    alt="burger"
                  />
                  <div class="card-body">
                    <h5 class="card-title">My Shoes </h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0">
                  <img
                    src="https://static-01.daraz.pk/p/0e80129fe2ac6e7515fb2cee92717657.jpg"
                    class="card-img-top"
                    alt="fast food"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Shoes Female</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary text-white">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0">
                  <img
                    src="https://static-01.daraz.pk/p/9cded9aeb8d17793cadbfc4879e7b8b1.jpg"
                    src="https://static-01.daraz.pk/p/d5fd0acf56ef9839f3f8d64f8eed903b.jpg"
                    class="card-img-top"
                    alt="pizza"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Stylish Shoes</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0 mt-4">
                  <img
                    src="https://cf.shopee.ph/file/d9006ce26c07cefd31329ad8eeb27c0d"
                    class="card-img-top"
                    alt="pizza"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Stylish Shoes</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0 mt-4">
                  <img
                    src="https://img.joomcdn.net/703a04f865b71f0abc5624d8b4cf6f64513c8f97_original.jpeg"
                    class="card-img-top"
                    alt="pizza"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Stylish Shoes</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0 mt-4">
                  <img
                    src="https://static-01.daraz.pk/p/ec60d03eaf68646b71f8e48ccefeba11.jpg"
                    class="card-img-top"
                    alt="pizza"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Stylish Shoes</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0 mt-4">
                  <img
                    src="https://static-01.daraz.pk/p/ec60d03eaf68646b71f8e48ccefeba11.jpg"
                    class="card-img-top"
                    alt="pizza"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Stylish Shoes</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0 mt-4">
                  <img
                    src="https://static-01.daraz.pk/p/ee03fd7e0f15d717e9ceca33205d8abd.jpg"
                    class="card-img-top"
                    alt="pizza"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Stylish Shoes</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 card-prodcuts">
                <div class="card w-100 mb-sm-3 mb-md-0 mt-4">
                  <img
                    src="https://static-01.daraz.pk/p/17471117735f6f43843739d41748188b.jpg"
                    class="card-img-top"
                    alt="pizza"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Stylish Shoes</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laboriosam error voluptates nulla molestias
                      expedita ad dicta iure quasi vel voluptatibus, odio iste,
                      earum ut excepturi, consequuntur in facilis eveniet.
                    </p>
                    <a href="void:(0)" class="btn btn-primary">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- FAQ,s --> */}
        <div class="py-5 faqs">
          <div class="container">
            <div class="conatiner">
              <div class="row mb-4">
                <div class="col-sm-12 col-md-10 offset-md-1 text-center text-white">
                  <h1>Our FAQ,s</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse dolor incidunt delectus perspiciatis modi
                    necessitatibus iste culpa. Ad et a quam nisi, dicta, eius
                    excepturi unde, voluptas laborum eaque iure?
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Question # 1
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Question # 2
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Question # 3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        Question # 4
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Question # 5
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Question # 6
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <p class="m-0 fw-bold text-black text-sm-center text-md-start">
                copy 2022. All Rights Reserved.
              </p>
            </div>
            <div class="d-sm-none d-md-block col-sm-12 col-md-8 text-end">
              <a href="javascript:void(0)" class="text-dark fw-bold">
                Terms &amp; Conditions
              </a>
              |
              <a href="javascript:void(0)" class="text-dark fw-bold">
                Privacy Policy
              </a>
              |
              <a href="javascript:void(0)" class="text-dark fw-bold">
                Order Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
