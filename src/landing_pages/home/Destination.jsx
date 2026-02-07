import { useState, useEffect } from "react";

function Destinations() {
  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    const fetchHotels = async () => {
      try {
        setError("");

        const res = await fetch("/data/hotels.json");

        if (!res.ok) {
          throw new Error("Fetch failed");
        }

        const data = await res.json();
        setHotels(data[city] || []);
      } catch (err) {
        setError("Failed to load hotel data");
        setHotels([]);
      }
    };

    fetchHotels();
  }, [city]);

  return (
    <div className="container mt-5 p-5">
      <h3 style={{ textAlign: "initial" }}>Pick a destination</h3>

      {/* FIRST ROW */}
      <div className="row mt-5 text-center">
        <div className="col" style={{ cursor: "pointer" }} onClick={() => setCity("Alibaug")}>
          <img src="media/images/Alibaug.svg" alt="Alibaug" />
          <h5>Alibaug</h5>
        </div>

        <div className="col" style={{ cursor: "pointer" }} onClick={() => setCity("Lonavala")}>
          <img src="media/images/Lonavala.svg" alt="Lonavala" />
          <h5>Lonavala</h5>
        </div>

        <div className="col" style={{ cursor: "pointer" }} onClick={() => setCity("Igatpuri")}>
          <img src="media/images/Igatpuri.svg" alt="Igatpuri" />
          <h5>Igatpuri</h5>
        </div>

        <div className="col" style={{ cursor: "pointer" }} onClick={() => setCity("Nashik")}>
          <img src="media/images/Nashik.svg" alt="Nashik" />
          <h5>Nashik</h5>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="row mt-4 text-center">
        <div className="col" style={{ cursor: "pointer" }} onClick={() => setCity("Panchgani")}>
          <img src="media/images/Panchgani.svg" alt="Panchgani" />
          <h5>Panchgani</h5>
        </div>

        <div className="col" style={{ cursor: "pointer" }} onClick={() => setCity("Udaipur")}>
          <img src="media/images/Udaipur.svg" alt="Udaipur" />
          <h5>Udaipur</h5>
        </div>

        <div className="col" style={{ cursor: "pointer" }} onClick={() => setCity("Wayanad")}>
          <img src="media/images/Wayanad.svg" alt="Wayanad" />
          <h5>Wayanad</h5>
        </div>

        <div className="col" style={{ cursor: "pointer" }} onClick={() => setCity("Manesar")}>
          <img src="media/images/Manesar.svg" alt="Manesar" />
          <h5>Manesar</h5>
        </div>
      </div>

      {/* RESULTS */}
      {error && <p className="mt-4 text-danger">{error}</p>}

      {city && hotels.length === 0 && !error && (
        <p className="mt-4">No hotels found for {city}</p>
      )}

      {hotels.length > 0 && (
        <div className="mt-5">
          <h4>Hotels in {city}</h4>

          {hotels.map((hotel, index) => (
            <div key={index} className="border rounded p-3 mt-3">
              <h5>{hotel.name}</h5>
              <p>Rating: ⭐ {hotel.rating}</p>
              <p>Price per night: ₹{hotel.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Destinations;
