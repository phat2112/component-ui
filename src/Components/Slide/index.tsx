import { useRef } from "react";
import cat1 from "assets/cat_1.jpeg";
import cat2 from "assets/cat_2.jpeg";
import cat3 from "assets/cat_3.jpeg";

import "./index.scss";

const catList = [
  {
    name: "Tom",
    image: cat1,
  },
  {
    name: "Maru",
    image: cat2,
  },
  {
    name: "Jellylorum",
    image: cat3,
  },
];

const Slide = () => {
  const itemRef = useRef<any>(null);
  const handleScroll = (index: number) => {
    const map = getMap();

    const node = map.get(index);
    if (node) {
      console.log("node", node);
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const getMap = () => {
    if (!itemRef.current) {
      itemRef.current = new Map();
    }

    return itemRef.current;
  };
  return (
    <div className="slide-container">
      {catList.map((cat, index) => (
        <button onClick={() => handleScroll(index)}>{cat.name}</button>
      ))}
      <ul>
        {catList.map((cat, index) => (
          <li
            key={cat.name}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(index, node);
              } else {
                map.delete(index);
              }
            }}
          >
            <img src={cat.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slide;
