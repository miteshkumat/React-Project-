import React from "react";
import Cards from "./Components/Cards";

const App = (elem) => {
  console.log(elem);

  const houses = [
    {
      id: 1,
      price: "$1,27,000",
      status: "For sale",
      title: "Detached Home in Bournemouth",
      location: "29, Terrace Rd, BH2 5EL",
      sqft: 1650,
      beds: 3,
      bath: 3,
      image: "images/house1.avif",
      agent: {
        name: "Jennifer Desueda",
        phone: "4567655676",
        avatar: "images/women1.avif",
      },
    },
    {
      id: 2,
      price: "$2,55,000",
      status: "For sale",
      title: "Modern Villa in London",
      location: "88 King St, W1D 3QF",
      sqft: 2100,
      beds: 4,
      bath: 3,
      image: "images/house2.webp",
      agent: {
        name: "Michael Perry",
        phone: "9876543210",
        avatar: "images/woman2.avif",
      },
    },
    {
      id: 3,
      price: "$98,000",
      status: "For rent",
      title: "Cozy Apartment in Manchester",
      location: "14 River Way, M4 1HQ",
      sqft: 950,
      beds: 2,
      bath: 1,
      image: "images/house3.avif",
      agent: {
        name: "Sarah Lopez",
        phone: "7654432211",
        avatar: "images/woman3.avif",
      },
    },
  ];

  return (
    <div>
      {houses.map(function (elem) {
        return (
          <Cards
            price={elem.price}
            title={elem.title}
            location={elem.location}
            sqft={elem.sqft}
            beds={elem.beds}
            bath={elem.bath}
            image={elem.image}
            agent_img={elem.agent.avatar}
            agent_name={elem.agent.name}
            agent_phoneNO={elem.agent.phone}
          />
        );
      })}
    </div>
  );
};

export default App;
