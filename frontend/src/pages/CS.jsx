import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { Nav } from "../components";

const CS = () => {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState([]);

  // fetch data from server and store in setPeople(array) state
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

  useEffect(() => {
    fetchData();
  }, []);

  // handles search input
  const handleSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    const filtered = people.filter(
      (item) =>
        // for searching of the data with Goverment ID, either in lower case or uppercase or just numbers alone
        item["Goverment ID"]
          .toLowerCase()
          .replaceAll(" ", "")
          .includes(searchTerm.toLowerCase().replaceAll(" ", "")) ||
        // for searching through the data with surname, surname & firstname
        (item.Surname.toLowerCase() + " " + item.Firstname.toLowerCase())
          .toLowerCase()
          .replaceAll(" ", "")
          .includes(searchTerm.toLowerCase().replaceAll(" ", "")) ||
        // for searching through the data with firstname, firstname & surname
        (item.Firstname.toLowerCase() + " " + item.Surname.toLowerCase())
          .toLowerCase()
          .replaceAll(" ", "")
          .includes(searchTerm.toLowerCase().replaceAll(" ", ""))
    );

    setBeneficiaries(filtered);
    setCount(filtered.length);
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
        style={{ height: "100vh", backgroundColor: "#000000" }}
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
    <>
      <Nav />
      <section className="container-fluid">
        <div className="">
          <h3 className="text-bold fw-bold text-center py-3">
            ODCHC Core Civil Beneficiaries
          </h3>
          <form
            className="d-flex justify-content-center vw-50"
            onSubmit={handleSearch}
          >
            <input
              className="form-control mr-sm-2"
              minLength="5"
              type="search"
              value={searchTerm}
              placeholder="GOV ID or NAME e.g CS04320"
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

          <div className="row">
            {beneficiaries.map((b) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-xs-6 col-sm-6"
                  key={b["Goverment ID"]}
                >
                  <div className="border bg-dark text-white card my-3 py-3">
                    <h4 className="card-header text-center">
                      {b["Goverment ID"]}
                    </h4>
                    <div className="pt-2 px-3">
                      <ul className="list-group list-group-flex">
                        <li className="list-group-item pt-3 text-center d-flex justify-content-between bg-dark text-white">
                          <b>Name</b>
                          <b>{b.Surname + " " + b.Firstname?.toUpperCase()}</b>
                        </li>
                        <li className="list-group-item py-3 text-center d-flex justify-content-between bg-dark text-white">
                          <b>Policy No :</b> <b>{b["Policy Number"]}</b>
                        </li>
                      </ul>

                      <div className="card-footer d-flex justify-content-center">
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
    </>
  );
};

export default CS;
