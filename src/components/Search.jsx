import React, { useEffect, useState } from "react";

const Search = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
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

        const Results = json.people;

        const filteredData = Results?.filter((person) =>
          person?.["Goverment ID"]?.toLowerCase()?.includes(searchTerm)
        );
        setBeneficiaries(filteredData);
        console.log(filteredData);
      })
      .catch((error) => console.error(error));
    setLoading(false);
  }, [searchTerm]);

  if (isLoading)
    return (
      <h1
        className="display-5 text-warning d-flex align-items-center justify-content-center text-center"
        style={{ height: "80vh" }}
      >
        ...Search Marvel's Database
      </h1>
    );

  return (
    <div className="container-fluid text-white bg-dark mt-5 pt-3">
      <div
        className="container-fluid text-white bg-dark mt-5 pt-3"
        style={{ height: "auto" }}
      >
        <div className="d-flex justify-content-center text-white my-3 py-2">
          <input
            placeholder="Goverment ID"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value?.toLowerCase())}
          />
        </div>
        <div className="">
          <div className="text-center">beneficiaries</div>
          <div className="row">
            {beneficiaries.map((b) => {
              return (
                <div className="col-lg-3 col-md-6 col-xs-6" key={b.Column1}>
                  <div className="border border-white card my-3 bg-dark">
                    <h4 className="text-center text-primary">
                      {b["Goverment ID"]}
                    </h4>
                    <div className="p-3">
                      <h6 className="card-header text-center py-3">
                        {b.Surname} {b.Firstname}
                      </h6>

                      <img
                        src={b["Picture URL"]}
                        width={250}
                        height={250}
                        className="card-img-top"
                        alt="...img"
                      />
                      <div className="pt-5 border-white">
                        <p className="d-flex justify-content-between">
                          Provider: <b>{b.Provider}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Policy Number: <b>{b["Policy Number"]}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Age: <b>{b.Age}</b>
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
                        <div>
                          <a
                            href={b.link}
                            target="_blink"
                            rel="noreferrer"
                            className="btn btn-outline-success"
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
    </div>
  );
};

export default Search;
