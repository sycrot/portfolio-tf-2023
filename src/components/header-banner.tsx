export default function HeaderBanner() {
  return (
    <>
      <div className="header-banner">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="image-header-banner"></div>
            </div>
            <div className="col-8">
              <div className="content">
                <p className="blue-gradient mb-0">Olá, eu sou</p>
                <h1 className="blue-gradient mb-0">Thiago Farias,</h1>
                <p className="text-white mb-0">desenvolvedor frontend</p>
                <div className="d-flex align-items-center">
                  <a href="https://drive.google.com/file/d/1sb9O-oHDO7Rze5fafLiBz1D-5PqPPd7H/view?usp=sharing" className="button-gradient" target="_blank">Download CV</a>
                  <a href="https://github.com/sycrot" className="button-rounded-git" target="_blank"></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}