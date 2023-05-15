import { Edit, ExternalLink, Heart, MapPin } from "react-feather";
import Header from "./Header";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

function App() {
  const rooms = 4;
  const squareFootage = 2420;
  const year = new Date().getFullYear();
  const zipCode = 1111;
  const [utilityCost, setUtilityCost] = useState(0);

  const GetEstimatedAmount = async () => {
    const baseURL =
      "https://utility-demo-server.herokuapp.com/zappling/api/utility-estimate";
    const qp = {
      sqft: squareFootage,
      beds: rooms,
      zipcode: zipCode,
      yearBuilt: year,
    };

    const url = new URL(baseURL);
    url.search = new URLSearchParams(qp).toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => setUtilityCost(data["predictions"][0]))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    GetEstimatedAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex justify-center items-center w-full">
        <img
          src="https://images.homes.com/listings/212/4382543223-234393551-original.jpg"
          alt="property-image"
          className="object-fill w-full h-[750px] "
        />
      </div>
      <div className="grid grid-cols-4 gap-4 xl:px-20 xl:py-15">
        <div className="col-span-4 xl:col-span-3 p-5 md:p-10 ">
          <div className="flex justify-between items-start">
            <div
              className={`grid grid-flow-row md:grid-flow-col gap-2 items-center`}
            >
              <p className="font-semibold text-[28px]">$2,600,000</p>
              <p className="py-1 px-2 text-sm rounded-full bg-secondary text-white">
                OPEN TUE 11AM - 1PM
              </p>
            </div>
            <div
              className={`${styles.row} gap-5 mt-2 md:mt-0 items-start md:items-center`}
            >
              <MapPin color={"#4c4c4c"} />
              <Edit color={"#4c4c4c"} />
              <ExternalLink color={"#4c4c4c"} />
              <Heart color={"#4c4c4c"} />
            </div>
          </div>
          <div className="my-3">
            <p>675 23rd Ave</p>
            <p>San Francisco, CA 94121 | Richmond District</p>
            <p>Estimated payment $15,722/month</p>
          </div>
          <div className={`${styles.row} border-t border-b my-5 items-center`}>
            <div className=" border-r my-3 grid grid-flow-row md:grid-flow-col gap-1 justify-center">
              <span className="font-semibold text-center md:text-start">4</span>
              <p>Beds</p>
            </div>
            <div className=" border-r my-3 grid grid-flow-row md:grid-flow-col gap-1 justify-center">
              <span className="font-semibold text-center md:text-start">4</span>
              <p>Baths</p>
            </div>
            <div className=" border-r my-3 grid grid-flow-row md:grid-flow-col gap-1 justify-center">
              <span className="font-semibold text-center md:text-start">
                2,420
              </span>
              <p>Sq Ft</p>
            </div>
            <div className="grid grid-flow-row md:grid-flow-col gap-1 justify-center">
              <span className="font-semibold text-center md:text-start">
                2,614
              </span>
              <p>Sq Ft Lot</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[18px]">About This Home</p>
            <p className="my-4 text-justify">
              Experience the perfect blend of classic charm and modern luxury in
              this meticulously renovated Edwardian home. The quality
              craftsmanship by Nova Designs + Builds shines throughout, ensuring
              a harmonious and exceptional living experience in the heart of
              Central Richmond. This meticulously renovated gem is nestled on a
              serene, slow-street block in the heart of San Francisco&apos;s
              Central Richmond neighborhood. With 4 bedrooms (including a
              primary suite w/adjacent bathroom and WIC), 3 on the upper level
              and a guest suite downstairs, this residence offers versatile
              living spaces. The open floor plan on the main level features a
              working fireplace, a family room, and a walk-out deck, creating a
              perfect setting for relaxation and entertainment. Nova Designs +
              Builds has beautifully restored and fully modernized this classic
              Edwardian home to meet the discerning needs of today&apos;s
              buyers. The home boasts a new foundation, electrical and plumbing
              systems, and radiant heat for ultimate comfort and peace of mind.
              Storage is abundant, with a garage for one car and an oversized
              west-facing landscaped yard that invites you to unwind and enjoy
              the outdoors. Situated in the Central Richmond, this home combines
              a peaceful residential setting with the convenience of urban
              amenities.
            </p>
            <div className="flex-col">
              <p>Listing Agent</p>
              <p className="font-bold">Helena Zaludova</p>
              <p>Compass</p>
              <p>(415) 738-7000</p>
              <p>helena@live7x7.com</p>
            </div>
            <hr className="my-5" />
            <div className={styles.col}>
              <div className={styles.row}>
                <p className="font-semibold">Calculate Utility</p>
                <p className="font-semibold text-end">
                  $ {utilityCost.toFixed(2)}
                </p>
              </div>
              <div className="grid grid-flow-row gap-2 md:grid-flow-col">
                <div className={styles.col}>
                  <label>No. of Rooms</label>
                  <input
                    className="rounded-md p-2 border"
                    type="text"
                    value={rooms}
                    disabled
                  />
                </div>
                <div className={styles.col}>
                  <label>Square Footage</label>
                  <input
                    className="rounded-md p-2 border"
                    type="text"
                    value={squareFootage}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-flow-row gap-2 md:grid-flow-col">
                <div className={styles.col}>
                  <label>Year</label>
                  <input
                    className="rounded-md p-2 border"
                    type="text"
                    value={year}
                    disabled
                  />
                </div>
                <div className={styles.col}>
                  <label>Zip Code</label>
                  <input
                    className="rounded-md p-2 border"
                    type="text"
                    value={zipCode}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block xl:col-span-1 p-5 mt-0 md:mt-5 ">
          <div
            className={`${styles.col} bg-white shadow-lg spread border p-4 rounded-xl`}
          >
            <div className={`${styles.row} justify-start`}>
              <img
                alt="agent-image"
                className="w-20 h-20 object-cover"
                src="https://imagescdn.homes.com/i2/QYdXXXi7UErszFxUx7vOxBGOdTp-102D_D0vlVkuhEQ/118/image.jpg?p=1"
              />
              <div>
                <p className="text-sm uppercase">Listing Agent</p>
                <p className="font-semibold">Helena Zaludova</p>
                <p className="text-sm text-gray-400">Compass</p>
              </div>
            </div>
            <p>(415) 738-7000</p>
            <textarea
              rows="4"
              className="p-2.5 text-sm rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
              value="Hi Helena, I would like to know more about this listing."
            ></textarea>
            <button className="rounded-md px-3 py-2 text-white bg-primary">
              Send a Message
            </button>
            <p className="font-semibold">No Fake Agents on Homes.com</p>
            <p className="text-gray-500">
              We connect you directly to the listing agent who knows the home
              best. No cold calls, robocalls, or spam from random agents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
