import React, { useEffect, useState } from "react";

const Personnels = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    fetch(
      `https://raw.githubusercontent.com/Andreyhuey/my-app/master/src/data/sample.json`,
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
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        className="container-fluid text-white bg-dark mt-5 pt-3"
        style={{ height: "auto" }}
      >
        <div className="container">
          <div className="text-center">beneficiaries</div>
          <div className="row">
            {beneficiaries.map((b) => {
              return (
                <div className="col-lg-4 col-md-6 col-xs-6" key={b.Column1}>
                  <div className="border border-primary card my-3 bg-dark">
                    <div className="p-2 my-3">
                      <h4 className="card-header text-center text-primary py-3">
                        {b.Surname} {b.Firstname}
                      </h4>
                      <img
                        // src={b.[]}
                        className="card-img-top"
                        alt="...img"
                      />
                      <div className="">
                        <p className="d-flex justify-content-between">
                          Provider: <b>{b.Provider}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Age: <b>{b.Age}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Phone Number: <b>{b["Phone Number"]}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Gender: <b>{b.Gender}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Enrolled On: <b>{b["Enrolled On"]}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          LGA: <b>{b.LGA}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Government ID: <b>{b["Goverment ID"]}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Policy Number: <b>{b["Policy Number"]}</b>
                        </p>
                        <div className="d-flex justify-content-end">
                          <a
                            href={b.link}
                            target="_blink"
                            rel="noreferrer"
                            className="btn btn-outline-warning"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Personnels;
