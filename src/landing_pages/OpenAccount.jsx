import React from "react";

function OpenAccount() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Open Your Partner Account</h1>
          <p className="text-muted mb-4">
            List your luxury property and start earning with StayVista
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">

            <div className="col-md-3">
              <div className="card h-100 p-4 shadow-sm">
                <h4 className="fw-bold">1</h4>
                <h6 className="mt-3">Create Account</h6>
                <p className="text-muted small">
                  Sign up with your basic details
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 p-4 shadow-sm">
                <h4 className="fw-bold">2</h4>
                <h6 className="mt-3">Add Property</h6>
                <p className="text-muted small">
                  Share villa & location details
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 p-4 shadow-sm">
                <h4 className="fw-bold">3</h4>
                <h6 className="mt-3">Verification</h6>
                <p className="text-muted small">
                  Photoshoot & quality check
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 p-4 shadow-sm">
                <h4 className="fw-bold">4</h4>
                <h6 className="mt-3">Go Live</h6>
                <p className="text-muted small">
                  Start hosting premium guests
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow p-4">
                <h3 className="fw-bold mb-4 text-center">
                  Create Your Account
                </h3>

                <form>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Property city"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Property Type</label>
                      <select className="form-select">
                        <option>Select property type</option>
                        <option>Villa</option>
                        <option>Apartment</option>
                        <option>Homestay</option>
                        <option>Bungalow</option>
                      </select>
                    </div>

                    <div className="col-12 text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-dark px-5"
                      >
                        Open Account
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-5">
        <div className="container text-center">
          <h4 className="fw-bold mb-3">Why Hosts Trust StayVista</h4>
          <p className="text-muted">
            Professional management • Premium guests • Higher earnings
          </p>
        </div>
      </section>

    </div>
  );
}

export default OpenAccount;
