import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const CS = () => {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState([]);

  // fetch data from server and store in state
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/Andreyhuey/my-app/master/src/data/cs.json`,
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
  }, []);

  // handles search input
  const handleSearch = () => {
    setLoading(true);
    const filtered = people.filter((item) =>
      item["Goverment ID"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBeneficiaries(filtered);
    console.log(filtered);
    setLoading(false);
  };

  // filter data based on search term
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

  // loading state component
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

  // Renders search input and results
  return (
    <section className="container-fluid">
      <div className="">
        <h3 className="text-bold fw-bold text-center py-3">
          ODCHD Core Civil Beneficiaries
        </h3>
        <div className="d-flex justify-content-center vw-50">
          <input
            className="form-control mr-sm-2"
            type="search"
            value={searchTerm}
            placeholder="GOV ID e.g CS04321"
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
                <div className="border bg-dark text-white card my-3 py-3">
                  <h4 className="text-center">{b["Goverment ID"]}</h4>
                  <div className="p-3">
                    <h6 className="card-header text-center py-3">
                      {b.Surname + " " + b.Firstname?.toUpperCase()}
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CS;
