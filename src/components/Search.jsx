import React, { useEffect, useState } from "react";

const Search = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    const handleSearch = () => {
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
          const Results = json.people;
          const filteredData = Results?.filter((person) =>
            person?.["Goverment ID"]?.toLowerCase()?.includes(searchTerm)
          );
          setBeneficiaries(filteredData);
          console.log(filteredData);
        })
        .catch((error) => console.error(error));
    };

    handleSearch();
  }, [searchTerm]);

  //   const result = data.people;

  // const set = [];

  // function lookUpProfile(word) {
  //   for (let i = 0; i < result.length; i++) {
  //     const p = result[i].ID;
  //     if (p.toLowerCase().includes(word)) {
  //       console.log(result[i]);
  //       set.push(result[i]);
  //     }
  //   }
  // }

  // const show = lookUpProfile("1");

  // show;
  // console.log(`NO: ${set.length}`);

  return (
    <div className="container-fluid text-white bg-dark pt-3 vh-100">
      <div
        className="container-fluid text-white bg-dark pt-3"
        style={{ height: "auto" }}
      >
        <div className="text-center h1">beneficiaries</div>

        <div className="d-flex justify-content-center">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="GOV ID e.g TC09500"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </div>

        <div className="">
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

                      <div className="pt-5 border-white">
                        <p className="d-flex justify-content-between">
                          Provider: <b>{b.Provider}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Phone Number: <b>{b["Phone Number"]}</b>
                        </p>
                        <p className="d-flex justify-content-between">
                          Policy Number: <b>{b["Policy Number"]}</b>
                        </p>
                        {/* <p className="d-flex justify-content-between">
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
                        </p> */}

                        <div className="align-items-center d-flex">
                          <a
                            href={b.link}
                            target="_blink"
                            rel="noreferrer"
                            className="btn btn-lg btn-light btn-block"
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
