import React from 'react';
import ImageScrumShine from "../images/ScrumShine2.jpg";

const About = () => {
  return (
      <div className='hero'>
          <div className="container text-center">
              <div className="row align-items-end">
                  <div className='col-sm-4'> {/* La grosseur de cette col = 3/12  */}
                      <img  src={ImageScrumShine} className="rounded mx-auto d-block" alt="..." class="img-thumbnail"/>
                  </div>
                  <div className="col">
                    Olivier Poirier
                  </div>
                  <div className="col">
                      Cindy Bragdon
                  </div>
                  <div className="col">
                      Karolann Mauger
                  </div>
              </div>
          </div>
      </div>
  );
};

export default About;
