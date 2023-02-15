import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";

const Users = () => {
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
              <div className="filter">
                <p>Filter</p>
                <select>
                  <option>Date</option>
                </select>
                <select>
                  <option>Name</option>
                </select>
                <button type="submit">
                  Export <BiDownload size={20} />
                </button>
              </div>
              <div className="table">
                <div className="table-head">
                  <p className="user-date">Date</p>
                  <p className="user-name">Name</p>
                  <p className="user-email">Email</p>
                  <p className="user-reference">Reference</p>
                  <p className="user-edit">Edit</p>
                </div>
                <div className="table-body">
                  <p className="user-date">7/11/2022</p>
                  <div className="user-name table-image">
                    <Image
                      src="/image/supportImage.png"
                      alt="user_image"
                      height={45}
                      width={45}
                    />
                    <p>Hamid Hasan</p>
                  </div>
                  <p className="user-email">hamidul3@gmail.com</p>
                  <p className="user-reference">8hg4xcvv</p>
                  <p className="user-edit">
                    <HiPencil size={20} color={"#5197ca"} />
                  </p>
                </div>
                <div className="table-body">
                  <p className="user-date">7/11/2022</p>
                  <div className="user-name table-image">
                    <Image
                      src="/image/supportImage.png"
                      alt="user_image"
                      height={45}
                      width={45}
                    />
                    <p>Hamid Hasan</p>
                  </div>
                  <p className="user-email">hamidul3@gmail.com</p>
                  <p className="user-reference">8hg4xcvv</p>
                  <p className="user-edit">
                    <HiPencil size={20} color={"#5197ca"} />
                  </p>
                </div>
                <div className="table-body">
                  <p className="user-date">7/11/2022</p>
                  <div className="user-name table-image">
                    <Image
                      src="/image/supportImage.png"
                      alt="user_image"
                      height={45}
                      width={45}
                    />
                    <p>Hamid Hasan</p>
                  </div>
                  <p className="user-email">hamidul3@gmail.com</p>
                  <p className="user-reference">8hg4xcvv</p>
                  <p className="user-edit">
                    <HiPencil size={20} color={"#5197ca"} />
                  </p>
                </div>
                <div className="table-body">
                  <p className="user-date">7/11/2022</p>
                  <div className="user-name table-image">
                    <Image
                      src="/image/supportImage.png"
                      alt="user_image"
                      height={45}
                      width={45}
                    />
                    <p>Hamid Hasan</p>
                  </div>
                  <p className="user-email">hamidul3@gmail.com</p>
                  <p className="user-reference">8hg4xcvv</p>
                  <p className="user-edit">
                    <HiPencil size={20} color={"#5197ca"} />
                  </p>
                </div>
                <div className="table-body">
                  <p className="user-date">7/11/2022</p>
                  <div className="user-name table-image">
                    <Image
                      src="/image/supportImage.png"
                      alt="user_image"
                      height={45}
                      width={45}
                    />
                    <p>Hamid Hasan</p>
                  </div>
                  <p className="user-email">hamidul3@gmail.com</p>
                  <p className="user-reference">8hg4xcvv</p>
                  <p className="user-edit">
                    <HiPencil size={20} color={"#5197ca"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Users;
