import React, { useEffect, useState } from "react";

const Search = () => {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [beneficiaries, setBeneficiaries] = useState([]);

  // fetch data from server and store in state
  useEffect(() => {
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
        const result = json.people;
        console.log(result);
        setPeople(result);
      })
      .catch((error) => console.error(error));
  }, []);

  // Filter data based on search term
  useEffect(
    (searchTerm) => {
      const filtered = people.filter((item) =>
        item["Goverment ID"].includes(searchTerm)
      );
      setBeneficiaries(filtered);
    },
    [people, searchTerm]
  );

  // handle search button click

  const handleSearch = () => {
    const filtered = people.filter((item) =>
      item["Goverment ID"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBeneficiaries(filtered);
  };

  // Render search input and results
  return (
    <div className="container-fluid vh-100 bg-dark text-white">
      <div>
        <h3 className="display-1 text-bold text-center">
          Find Your beneficiaries
        </h3>
        <div className="d-flex justify-content-center">
          <input
            className="form-control mr-sm-2"
            type="search"
            value={searchTerm}
            placeholder="GOV ID e.g TC,SB,TH"
            aria-label="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            onClick={handleSearch}
            className="btn btn-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </div>

        <div className="row">
          {beneficiaries.map((b) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-xs-6 col-sm-6"
                key={b["Goverment ID"]}
              >
                <div className="border border-primary bg-primary text card my-3">
                  <h4 className="text-center">{b["Goverment ID"]}</h4>
                  <div className="p-3">
                    <h6 className="card-header text-center py-3">
                      {b.Surname + b.Firstname}
                    </h6>

                    <div className="pt-5">
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
  );

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

  // Previous solution of Code

  //   return (
  //     <div className="container-fluid text-white bg-dark pt-3 vh-100">
  //       <div
  //         className="container-fluid text-white bg-dark pt-3"
  //         style={{ height: "auto" }}
  //       >
  //         <div className="text-center h1">beneficiaries</div>

  //         <div className="d-flex justify-content-center">
  //           <input
  //             className="form-control mr-sm-2"
  //             type="search"
  //             placeholder="GOV ID e.g TC09500"
  //             aria-label="Search"
  //             onChange={(e) => setSearchTerm(e.target.value)}
  //           />
  //           <button className="btn btn-primary my-2 my-sm-0" type="submit">
  //             Search
  //           </button>
  //         </div>

  //         <div className="">
  //           <div className="row">

  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Search;
