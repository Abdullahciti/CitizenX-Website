import { newsFour, newsOne, newsThree, newsTwo } from "../../../../assets";

const LatestNews = () => {
  return (
    <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
      <h2 className="mt-0 mb-20">Latest News</h2>
      <div className="news-row d-flex align-center">
        <img decoding="async" src={newsOne} alt="" />
        <div className="info">
          <h3>Created a project with SASS</h3>
          <p className="m-0 fs-14 c-grey">Following immersion in SASS examples and tutorials.</p>
        </div>
        <div className="btn-shape bg-eee fs-13 label">3 Days Ago</div>
      </div>
      <div className="news-row d-flex align-center">
        <img decoding="async" src={newsTwo} alt="" />
        <div className="info">
          <h3>Changed The Design</h3>
          <p className="m-0 fs-14 c-grey">A Brand New Website Design</p>
        </div>
        <div className="btn-shape bg-eee fs-13 label">5 Days Ago</div>
      </div>
      <div className="news-row d-flex align-center">
        <img decoding="async" src={newsThree} alt="" />
        <div className="info">
          <h3>Join my team</h3>
          <p className="m-0 fs-14 c-grey">I'm recruiting a group of junior web developers</p>
        </div>
        <div className="btn-shape bg-eee fs-13 label">7 Days Ago</div>
      </div>
      <div className="news-row d-flex align-center">
        <img decoding="async" src={newsFour} alt="" />
        <div className="info">
          <h3>Added Payment Gateway</h3>
          <p className="m-0 fs-14 c-grey">Many New Payment Gateways Added</p>
        </div>
        <div className="btn-shape bg-eee fs-13 label">9 Days Ago</div>
      </div>
    </div>
  );
};

export default LatestNews;
