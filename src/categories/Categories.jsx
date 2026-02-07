function Categories() {
  return (
    <div className="accordion-item mb-3">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#categoriesAccordion"
          aria-expanded="false"
          aria-controls="categoriesAccordion"
        >
          Categories<i class="fa-solid fa-angle-down"></i>
        </button>
      </h2>

      <div
        id="categoriesAccordion"
        className="accordion-collapse collapse"
        data-bs-parent="#supportAccordion"
      >
        <div className="accordion-body">
          <ul className="list-unstyled mb-0">
            <li className="mb-2">Occations</li>
            <li className="mb-2">Companions</li>
            <li className="mb-2">Experiences</li>
            <li>Luxury Stays</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
