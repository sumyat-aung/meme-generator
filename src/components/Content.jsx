import React from "react";

export default function Content() {
  // state on memesData
  let [memesData, setMemesData] = React.useState({
    topText: "",
    bottomText: "",
    Img: "https://i.imgflip.com/3i7p.jpg",
  });

  // setting usestate for API's data
  let [memesArray, setMemesArray] = React.useState([]);

  // fetching
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((ApiData) => setMemesArray(ApiData.data.memes));
  }, []);

  // Generating event
  let generateMemes = (e) => {
    let randomImgArray = Math.floor(Math.random() * memesArray.length);
    let GetMemeImg = memesArray[randomImgArray].url;

    setMemesData((prevMemesData) => {
      return {
        ...prevMemesData,
        Img: GetMemeImg,
      };
    });
  };

  // input Event
  let inputOnChange = (e) => {
    let { name, value } = e.target;
    setMemesData((prevMemesData) => {
      return {
        ...prevMemesData,
        [name]: value,
      };
    });
  };

  return (
    <div className="content">
      <div className="meme">
        <div className="form">
          <input
            type="text"
            placeholder=""
            name="topText"
            onChange={inputOnChange}
            value={memesData.topText}
          />
          <input
            type="text"
            placeholder=""
            name="bottomText"
            onChange={inputOnChange}
            value={memesData.bottomText}
          />
          <button className="btn" onClick={generateMemes}>
            Get a new Meme image !
          </button>
        </div>
        <div className="box">
          <img src={memesData.Img} className="memeImg" />
          <h2 className="text top">{memesData.topText}</h2>
          <h2 className="text bottom">{memesData.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
