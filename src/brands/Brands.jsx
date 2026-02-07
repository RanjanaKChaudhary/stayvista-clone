function Brands() {
  return (
    <div className="accordion-item mb-3">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed d-flex align-items-center gap-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#brandsAccordion"
          aria-expanded="false"
          aria-controls="brandsAccordion"
        >
          <i className="bi bi-plus-circle text-primary fs-5"></i>
          <span>Brands<i class="fa-solid fa-angle-down"></i></span>
        </button>
      </h2>

      <div
        id="brandsAccordion"
        className="accordion-collapse collapse"
        data-bs-parent="#supportAccordion"
      >
        <div className="accordion-body">
          <div className="row text-center px-5 p-5">
            <div className="col">
              <img src="media/images/brands1.svg" alt="Brand1" className="img-fluid" />
            </div>
            <div className="col">
              <img src="media/images/brands2.svg" alt="Brand2" className="img-fluid" />
            </div>
            <div className="col">
              <img src="media/images/brands3.svg" alt="Brand3" className="img-fluid" />
            </div>
            <div className="col">
              <img src="media/images/brands4.svg" alt="Brand4" className="img-fluid" />
            </div>
            <div className="col">
              <img src="media/images/brands5.svg" alt="Brand5" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
