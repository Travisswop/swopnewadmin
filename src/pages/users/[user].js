import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const User = () => {
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
              {/* <h1>User {_id}</h1> */}
              <div className="user-top-banner">
                <button>
                  Export <BiDownload size={20} />
                </button>
                <div className="user-top-banner-inside">
                  <Image
                    src="/image/travisbig.png"
                    alt="user_image"
                    height={177}
                    width={177}
                  />
                  <p>Travis Herron</p>
                  <a href="www.swopme.com/Travis">www.swopme.com/Travis</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default User;