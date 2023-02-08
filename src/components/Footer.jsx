import React from "react";

function Footer() {
  return (
    <>
    <hr/>
      <footer className="py-4">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-5">
                    <div className="footer-top-data d-flex gap-30 align-items-center">
                      <img width="80" src="./img/logo.svg" alt="Loft logo" />
                      <h2 className="mb-0">REACT-LOFT</h2>
                    </div>
                </div>
                {/*<div className="col-7">
                  <div className="input-group">
                    <input 
                      type="text"
                      className="form-control py-1"
                      placeholder="Ваш email"
                      aria-label="Подпишитесь на рассылку"
                      aria-describedby="basic-addon2"
                    />
                    <button className="input-group-text p-2">
                      Отправить
                    </button>
                  </div>
                </div>*/}
            </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-0">Контакты</h4>
              <div className="footer-contact d-flex flex-column">
                <p>--</p>
                <p>--</p>
                <p>--</p>
                <p>--</p>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-0">Информация</h4>
              <div className="footer-info d-flex flex-column">
                <p>--</p>
                <p>--</p>
                <p>--</p>
                <p>--</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0">
                <hr/>
                &copy; {new Date().getFullYear()}; Made by the k1ndness
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
