import './Qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">My Personal Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          {/* 1st Tab */}
          <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "} Eduaction
          </div>
          {/* 2nd Tab */}
          <div className="qualification_button button--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "} Experience
          </div>
        </div>

        <div className="qualification_sections">
          {/* 1st Content */}
          <div className="qualification_content qualification_content-active">
            {/* Pair 1- 1st */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Data Analytics
                </h3>
                <span className="qualification_subtitle">
                  Coursera Google Professional Cert.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                </div> 2022
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

            </div>

            {/* Pair 1- 2nd */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Data Analyst
                </h3>
                <span className="qualification_subtitle">
                  Beyond Eastfield Foundation
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                </div> 2022 - present
              </div>

            

            </div>

            {/* Pair 2- 1st */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Responsive Web Design
                </h3>
                <span className="qualification_subtitle">
                  freecodecamp.org
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                </div> 2021
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

            </div>

            {/* Pair 2 - 2nd */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  IT Support (Remote)
                </h3>
                <span className="qualification_subtitle">
                  Eastfield Imperial School 
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                </div> 2015 - 2022
              </div>

            

            </div>
          </div>

          {/* 2nd Content */}
          <div className="qualification_content">
            {/* Pair 1- 1st */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Digital Marketing
                </h3>
                <span className="qualification_subtitle">
                  Google Digital Skills for Africa.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                </div> 2021
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

            </div>

            {/* Pair 1- 2nd */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Data Management Support (Volunteer)
                </h3>
                <span className="qualification_subtitle">
                  World Health Organization - Yola
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                </div> 2019 - 2021 
              </div>

            

            </div>

            {/* Pair 2- 1st */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Responsive Web Design
                </h3>
                <span className="qualification_subtitle">
                  freecodecamp.org
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                </div> 2021
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

            </div>

            {/* Pair 2 - 2nd */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Estate Management
                </h3>
                <span className="qualification_subtitle">
                  Federal University of Tech. Minna
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                </div> 2006 - 2014
              </div>

            

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Qualification