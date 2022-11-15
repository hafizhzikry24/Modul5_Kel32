import { Fragment } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const poster = [
    {
      title: "John Wick",
      id: 1,
      rate: 4,
      genre: "action, crime",
      img: "https://dafunda.com/wp-content/uploads/2019/05/john-wick-4.jpg",
    },
    {
      title: "John Wick",
      id: 2,
      rate: 4,
      genre: "action, crime",
      img: "https://dafunda.com/wp-content/uploads/2019/05/john-wick-4.jpg",
    },
    {
      title: "John Wick",
      id: 3,
      rate: 4,
      genre: "action, crime",
      img: "https://dafunda.com/wp-content/uploads/2019/05/john-wick-4.jpg",
    },
    {
      title: "John Wick",
      id: 4,
      rate: 2,
      genre: "action, crime",
      img: "https://i.pinimg.com/originals/ee/ff/46/eeff468a7cde5720e45c4f7a1daf8d95.png",
    },
  ];
  const data = [
    {
      title: "John Wick",
      id: 1,
      rate: 4,
      genre: "action, crime",
      img: "https://i.pinimg.com/originals/ee/ff/46/eeff468a7cde5720e45c4f7a1daf8d95.png",
    },
    {
      title: "John Wick",
      id: 2,
      rate: 4,
      genre: "action, crime",
      img: "https://i.pinimg.com/originals/ee/ff/46/eeff468a7cde5720e45c4f7a1daf8d95.png",
    },
    {
      title: "John Wick",
      id: 3,
      rate: 4,
      genre: "action, crime",
      img: "https://i.pinimg.com/originals/ee/ff/46/eeff468a7cde5720e45c4f7a1daf8d95.png",
    },
    {
      title: "John Wick",
      id: 4,
      rate: 4,
      genre: "action, crime",
      img: "https://dafunda.com/wp-content/uploads/2019/05/john-wick-4.jpg",
    },
  ];

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
            />
            {data.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      <p id="movies">All Movies</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardSmall
            title={item.title}
            img={item.img}
            genre={item.genre}
            size={STAR_SIZE}
            color={STAR_COLOR}
            onClick={() => alert("item id = " + item.id)}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}
