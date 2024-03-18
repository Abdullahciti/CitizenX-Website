const Widgets = () => {
  return (
    <div className="widgets-control p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Widgets Control</h2>
      <p className="mt-0 mb-20 c-grey fs-15">Show/Hide Widgets</p>
      <div className="control d-flex align-center mb-15">
        <input type="checkbox" id="one" defaultChecked />
        <label htmlFor="one">Quick Draft</label>
      </div>
      <div className="control d-flex align-center mb-15">
        <input type="checkbox" id="two" defaultChecked />
        <label htmlFor="two">Yearly Targets</label>
      </div>
      <div className="control d-flex align-center mb-15">
        <input type="checkbox" id="three" defaultChecked />
        <label htmlFor="three">Tickets Statistics</label>
      </div>
      <div className="control d-flex align-center mb-15">
        <input type="checkbox" id="four" defaultChecked />
        <label htmlFor="four">Latest News</label>
      </div>
      <div className="control d-flex align-center mb-15">
        <input type="checkbox" id="five" />
        <label htmlFor="five">Latest Tasks</label>
      </div>
      <div className="control d-flex align-center mb-15">
        <input type="checkbox" id="six" />
        <label htmlFor="six">Top Search Items</label>
      </div>
    </div>
  );
};

export default Widgets;
