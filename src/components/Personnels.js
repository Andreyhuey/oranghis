import React, { useEffect, useState } from "react";

const Personnels = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("CS");
  const [count, setCount] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getData = () => {
    try {
      fetch(`https://superb-haupia-873ebf.netlify.app/source.json`, {
        mode: "no-cors",
        request: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  });

  return <div>fetch</div>;
};

export default Personnels;
