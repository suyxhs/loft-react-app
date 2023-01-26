function Banner() {
  return (
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          {/* FIRST BANNER START */}
          <div className="banner">
            <img
              className="banner-img"
              src="img/banner/banner-img.png"
              alt="banner"
            />
          </div>
          {/* FIRST BANNER END */}

          <div className="col-6">
            {/* MAIN BANNER START */}
            <div className="main-banner position-relative">
              <img
                src="img/banner/main-banner/01.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Наши работы</h4>
                <h5>Мебель Loft</h5>
                <p>Цены: от 1000 до 30000 ₽</p>
                <button>Купить</button>
              </div>
            </div>
            {/* MAIN BANNER END */}
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">

              {/* SMALL 01 BANNER START */}
              <div className="small-banner position-relative p-2">
                <img
                  src="img/banner/small-banner/01.jpg"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                </div>
              </div>
              {/* SMALL 01 BANNER END */}

              {/* SMALL 02 BANNER START */}
              <div className="small-banner position-relative p-2">
                <img
                  src="img/banner/small-banner/02.jpg"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                </div>
              </div>
              {/* SMALL 02 BANNER END */}

              {/* SMALL 03 BANNER START */}
              <div className="small-banner position-relative p-2">
                <img
                  src="img/banner/small-banner/03.jpg"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                </div>
              </div>
              {/* SMALL 03 BANNER END */}

              {/* SMALL 04 BANNER START */}
              <div className="small-banner position-relative p-2">
                <img
                  src="img/banner/small-banner/04.jpg"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                </div>
              </div>
              {/* SMALL 04 BANNER END */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
