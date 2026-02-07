import React from "react";

function PartnerWithUs() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Partner With Us</h1>
          <p className="text-muted mb-4">
            Turn your luxury property into a high-performing holiday home with StayVista
          </p>
          <button className="btn btn-dark px-4 py-2">
            Get Started
          </button>
        </div>
      </section>

      {/* WHY STAYVISTA */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Partner with StayVista?</h2>
            <p className="text-muted">
              We take care of everything, so you don’t have to.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center p-4 shadow-sm">
                <h5 className="fw-bold">Higher Earnings</h5>
                <p className="text-muted">
                  Optimised pricing and premium guests ensure maximum returns.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-4 shadow-sm">
                <h5 className="fw-bold">End-to-End Management</h5>
                <p className="text-muted">
                  From bookings to housekeeping, we manage it all.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 text-center p-4 shadow-sm">
                <h5 className="fw-bold">Trusted Brand</h5>
                <p className="text-muted">
                  India’s leading luxury villa rental platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">How It Works</h2>
          </div>

          <div className="row text-center g-4">
            <div className="col-md-3">
              <h4 className="fw-bold">1</h4>
              <p className="text-muted">Share your property details</p>
            </div>

            <div className="col-md-3">
              <h4 className="fw-bold">2</h4>
              <p className="text-muted">Onboarding & photoshoot</p>
            </div>

            <div className="col-md-3">
              <h4 className="fw-bold">3</h4>
              <p className="text-muted">Go live on StayVista</p>
            </div>

            <div className="col-md-3">
              <h4 className="fw-bold">4</h4>
              <p className="text-muted">Earn hassle-free income</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY REQUIREMENTS */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">Property Requirements</h2>
              <ul className="text-muted">
                <li>Well-maintained luxury villas or homes</li>
                <li>Fully furnished with modern amenities</li>
                <li>Great location and accessibility</li>
                <li>Compliance with local regulations</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Luxury Villa"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Partner With Us?</h2>
          <p className="mb-4">
            Join hundreds of homeowners earning effortlessly with StayVista.
          </p>
          <button className="btn btn-light px-4 py-2">
            List Your Property
          </button>
        </div>
      </section>

    </div>
  );
}

export default PartnerWithUs;
