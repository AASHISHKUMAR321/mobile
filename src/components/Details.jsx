import React from "react";

export const Details = () => {
  const data = [
    {
      Heading: "Mobile Opertaing System",
      items: ["Android", "Blackberry", "iphone", "Windwos Phone"],
      items: [
        { name: "Android", style: "" },
        { name: "Blackberry", style: "" },
        { name: "iphone", style: "" },
        { name: "Windwos Phone", style: "" },
      ],
    },
    {
      Heading: "Mobile Manufacturers",
      items: [
        { name: "Samsung", style: "square" },
        { name: "Htc", style: "square" },
        { name: "micromax", style: "" },
        { name: "apple", style: "circle" },
      ],
    },
  ];
  return (
    <div>
      {data.map((el) => {
        return (
          <div>
            <h1>{el.Heading}</h1>
            {el.items.map((e) => {
              return <li style={{ listStyle: String(e.style) }}>{e.name}</li>;
            })}
          </div>
        );
      })}
    </div>
  );
};
