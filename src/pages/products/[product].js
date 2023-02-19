import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiFolderUploadFill } from "react-icons/ri";

const Product = () => {
  const router = useRouter();
  const { _id } = router.query;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="main-container">
          <Sidebar />
          <div className="main-content">
            <div className="home-top-panel-out">
              <div className="home-top-panel">
                <h2>Dashboard</h2>
                <input type="text" placeholder="🔎︎ Search here..." />
                <select className="select-language">
                  <option value="eng">Eng (US)</option>
                  <option value="eng">Eng (US)</option>
                </select>
                <div className="travis-card">
                  <Image
                    src="/image/travis.png"
                    alt="travis_image"
                    height={54}
                    width={55}
                    className="travis_image"
                  />
                  <p>Travis Herron</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="product-upload-container">
                <div className="product-image-upload">
                  <div className="product-image-upload-top">
                    <button type="submit">
                      <RiFolderUploadFill size={15} /> Export
                    </button>
                    <Image
                      src="/image/product1.png"
                      alt="product_image"
                      height={200}
                      width={200}
                    />
                    <Link href="/">
                      <BiMessageSquareEdit size={35} color="#fff" />
                    </Link>
                  </div>
                  <div className="product-image-upload-bottom">
                    <Image
                      src="/image/product1.png"
                      alt="product_image"
                      height={200}
                      width={200}
                    />
                    <Image
                      src="/image/product2.png"
                      alt="product_image"
                      height={200}
                      width={200}
                    />
                    <Image
                      src="/image/product1.png"
                      alt="product_image"
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className="product-name">
                  <h3>Product Name:</h3>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    className="product-upload-input"
                  />
                  <div className="product-description-card">
                    <h5>Description</h5>
                    <textarea
                      rows="7"
                      placeholder="Enter description here"
                      className="product-name-textarea"
                    />
                  </div>
                </div>
                <div className="product-unit-price">
                  <h3>Price:</h3>
                  <input
                    type="text"
                    placeholder="Enter product price"
                    className="product-upload-input"
                  />
                  <div className="product-description-card">
                    <h5>Variants</h5>
                    <div className="product-name-textarea">
                      <div className="variant-title-text">
                        <label>*Variant Title:</label>{" "}
                        <input type="text" placeholder="Input text here" />
                      </div>
                      <div className="variant-title-text">
                        <label>*Color:</label> <div className="color-red" />
                        <div className="color-green" />
                        <button>Delete Variant</button>
                      </div>
                      <div className="variant-title-text">
                        <label>*Size:</label>
                        <div className="size">M</div>
                        <div className="size">L</div>
                        <div className="size">XL</div>
                        <button>Delete Variant</button>
                      </div>
                      <button className="add-variant">Add Variant</button>
                    </div>
                  </div>
                </div>
                <div className="product-quantity">
                  <h3>Quantity available:</h3>
                  <input
                    type="text"
                    placeholder="Enter product quantity"
                    className="product-upload-input"
                  />
                  <div className="product-description-card">
                    <h5>Info</h5>
                    <div className="product-name-textarea">
                      <div className="product-info">
                        <div className="product-info-left">
                          *Contact Info
                          <br />
                          *Swop Profile
                          <br />
                          *Website
                          <br />
                          *Add Texes
                          <br />
                          *Shipping
                        </div>
                        <div className="product-info-right">
                          : <input type="checkbox" /> YES{" "}
                          <input type="checkbox" /> No
                          <br />
                          : <input type="checkbox" /> YES{" "}
                          <input type="checkbox" /> No
                          <br />
                          : <input type="checkbox" /> YES{" "}
                          <input type="checkbox" /> No
                          <br />
                          : <input type="checkbox" /> YES{" "}
                          <input type="checkbox" /> No
                          <br />
                          : <input type="checkbox" /> YES{" "}
                          <input type="checkbox" /> No
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="product-top-panel">
                  <h3>Product Inventory</h3>
                  <input type="text" placeholder="🔎︎ Search here..." />
                  <div className="filter">
                    <p>Filter</p>
                    <select>
                      <option>Date</option>
                    </select>
                    <select>
                      <option>Name</option>
                    </select>
                  </div>
                </div>
                <div className="table">
                  <div className="table-head">
                    <p className="table-product-product">Product</p>
                    <p className="table-product-name">Product Name</p>
                    <p className="table-product-price">Price</p>
                    <p className="table-product-bonus">Bonus</p>
                    <p className="table-product-quantity">Quantity</p>
                    <p className="table-product-color">Color</p>
                  </div>
                  <div className="table-body">
                    <div className="table-product-product table-image">
                      <Image
                        src="/image/product1.png"
                        alt="user_image"
                        height={45}
                        width={45}
                      />
                    </div>
                    <p className="table-product-name">Gold NFC</p>
                    <p className="table-product-price">12$</p>
                    <p className="table-product-bonus">57%</p>
                    <p className="table-product-quantity">57</p>
                    <p className="table-product-color">Black, White</p>
                  </div>
                  <div className="table-body">
                    <div className="table-product-product table-image">
                      <Image
                        src="/image/product1.png"
                        alt="user_image"
                        height={45}
                        width={45}
                      />
                    </div>
                    <p className="table-product-name">Gold NFC</p>
                    <p className="table-product-price">12$</p>
                    <p className="table-product-bonus">57%</p>
                    <p className="table-product-quantity">57</p>
                    <p className="table-product-color">Black, White</p>
                  </div>
                  <div className="table-body">
                    <div className="table-product-product table-image">
                      <Image
                        src="/image/product1.png"
                        alt="user_image"
                        height={45}
                        width={45}
                      />
                    </div>
                    <p className="table-product-name">Gold NFC</p>
                    <p className="table-product-price">12$</p>
                    <p className="table-product-bonus">57%</p>
                    <p className="table-product-quantity">57</p>
                    <p className="table-product-color">Black, White</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
