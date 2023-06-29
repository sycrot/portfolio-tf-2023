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
                <p className="blue-gradient font-s16 mb-0">Olá, eu sou</p>
                <h1 className="blue-gradient mb-0">Thiago Farias,</h1>
                <p className="text-white font-s16 mb-0">desenvolvedor frontend</p>
                <div className="d-flex align-items-center">
                  <a href="" className="button-gradient">Download CV</a>
                  <a href="" className="button-rounded-git"></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}