const TopSearchItems = () => {
  return (
    <div className="search-items p-20 bg-mainMode rad-10">
      <h2 className="mt-0 mb-20">Top Search Items</h2>
      <div className="items-head d-flex space-between c-grey mb-10">
        <div>Keyword</div>
        <div>Search Count</div>
      </div>
      <div className="items d-flex space-between pt-15 pb-15">
        <span>Programming</span>
        <span className="bg-eee fs-13 btn-shape">220</span>
      </div>
      <div className="items d-flex space-between pt-15 pb-15">
        <span>JavaScript</span>
        <span className="bg-eee btn-shape fs-13">180</span>
      </div>
      <div className="items d-flex space-between pt-15 pb-15">
        <span>React.js</span>
        <span className="bg-eee btn-shape fs-13">160</span>
      </div>
      <div className="items d-flex space-between pt-15 pb-15">
        <span>Code</span>
        <span className="bg-eee btn-shape fs-13">145</span>
      </div>
      <div className="items d-flex space-between pt-15 pb-15">
        <span>Design</span>
        <span className="bg-eee btn-shape fs-13">110</span>
      </div>
      <div className="items d-flex space-between pt-15 pb-15">
        <span>Logic</span>
        <span className="bg-eee btn-shape fs-13">95</span>
      </div>
    </div>
  );
};

export default TopSearchItems;
