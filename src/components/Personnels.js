import React, { useEffect, useState } from "react";

const Personnels = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("CS");
  const [count, setCount] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getData = () => {
    fetch(
      `https://raw.githubusercontent.com/Andreyhuey/my-app/master/src/data/Source.json`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setBeneficiaries(json.people);
        console.log(json.people);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <div
        className="container-fluid text-white bg-dark mt-5 pt-3"
        style={{ height: "auto" }}
      >
        <div className="h4 text-center">
          <div>beneficiaries</div>
          {beneficiaries.map((b) => {
            return (
              <div className="card" key={b.Column1}>
                <h3>
                  {b.Surname} {b.Firstname}
                </h3>
                <p>{b["Policy Number"]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Personnels;
