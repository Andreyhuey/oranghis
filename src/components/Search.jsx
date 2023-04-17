import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Nav from "./Nav";

const Search = () => {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState("");
  const [searchTerm, setSearchTerm] = useState("CS0345");
  const [loading, setLoading] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState([]);

  // fetch data from server and store in state
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/Andreyhuey/my-app/master/src/data/Source.json`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        const json = await response.json();
        const result = json.people;
        console.log(result);
        setPeople(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    setLoading(false);
  }, []);

  // handle search button click
  const handleSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    const filtered = people.filter(
      (item) =>
        function lookUpProfile(searchTerm) {
          for (let i = 0; i < item.length; i++) {
            const p = item[i]["Policy Number"];
            if (p === searchTerm) {
              console.log(item[i]);
              return item[i];
            }
          }
        }
    );

    setBeneficiaries(filtered);
    setCount(filtered.length);
    console.log(filtered);
    setLoading(false);
  };

  const handleCount = () => {};

  // Filter data based on search term
  useEffect(
    (searchTerm) => {
      setLoading(true);
      const filtered = people.filter((item) =>
        item["Goverment ID"].includes(searchTerm)
      );
      setBeneficiaries(filtered);
      setLoading(false);
    },
    [people, searchTerm, loading]
  );

  if (loading)
    return (
      <div
        className="display-1 d-flex align-items-center justify-content-center"
        style={{ height: "100vh", backgroundColor: "#2b6777" }}
      >
        <BeatLoader
          color="#ffff"
          size={13}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  // Render search input and results
  return (
    <>
      <Nav />
      <div className="container vh-auto">
        <div className="vh-auto">
          <h3 className="display-1 text-bold text-center">
            Find Your beneficiaries
          </h3>
          <form
            className="d-flex justify-content-center vw-50"
            onSubmit={handleSearch}
          >
            <input
              className="form-control mr-sm-2"
              minLength={5}
              type="search"
              value={searchTerm}
              placeholder="GOV ID or NAME e.g CS04321"
              aria-label="Search"
              onChange={(event) => setSearchTerm(event.target.value)}
              required
            />
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="submit"
              value="submit"
            >
              Search
            </button>
          </form>

          <div className="fw-bold text-center mt-2">
            Search Result : <b className="text-primary">{count}</b>
          </div>

          {handleCount()}

          <div className="row">
            {beneficiaries.map((b) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-xs-6 col-sm-6"
                  key={b["Goverment ID"]}
                >
                  <div className="border bg-dark text-white card my-3 py-3">
                    <h4 className="text-center">{b["Goverment ID"]}</h4>
                    <div className="p-3">
                      <h6 className="card-header text-center py-3">
                        {b.Surname?.toUpperCase() +
                          " " +
                          b.Firstname?.toUpperCase()}
                      </h6>

                      <div className="d-flex justify-content-center">
                        <a
                          href={b.link}
                          target="_blink"
                          rel="noreferrer"
                          className="btn btn-lg btn-secondary btn-block"
                        >
                          Edit
                        </a>
                      </div>

                      <div className="pt-2">
                        {/* <p className="d-flex justify-content-between">
                        Provider: <b>{b.Provider}</b>
                      </p>
                      <p className="d-flex justify-content-between">
                        Status: <b>{b.Status}</b>
                      </p>
                      <p className="d-flex justify-content-between">
                        Gender: <b>{b.Gender}</b>
                      </p>
                      <p className="d-flex justify-content-between">
                        Age: <b>{b.Age}</b>
                      </p>
                      <p className="d-flex justify-content-between">
                        Phone Number: <b>{b["Phone Number"]}</b>
                      </p>
                      <p className="d-flex justify-content-between">
                        Policy Number: <b>{b["Policy Number"]}</b>
                      </p> */}
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
  //             placeholder="GOV ID or NAME e.g TC09500"
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
