import React from 'react'
import ProfilePic from "../../images/profile.png"
const FirstTemp = () => {
  return (
    <div className='mb-5'>
     <div className="resume">
  <div className="resume_left">
    <div className="resume_profile">
      <img src={ProfilePic} alt="profile_pic" />
    </div>
    <div className="resume_content">
      <div className="resume_item resume_info">
        <div className="title">
          <p className="bold p-0 mt-2 mb-0 text-center">stephen colbert</p>
          <p className="regular p-0 text-center">Designer</p>
        </div>
        <ul className='p-0'>
          <li>
            <div className="icon">
              <i className="fas fa-map-signs" />
            </div>
            <div className="data">
              21 Street, Texas  USA
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fas fa-mobile-alt" />
            </div>
            <div className="data">+324 4445678</div>
          </li>
          <li>
            <div className="icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="data">stephen@gmail.com</div>
          </li>
          <li>
            <div className="icon">
              <i className="fab fa-weebly" />
            </div>
            <div className="data">www.stephen.com</div>
          </li>
        </ul>
      </div>
      <div className="resume_item resume_skills">
        <div className="title">
          <p className="bold p-0 m-1 skills-title">skill's</p>
        </div>
        <ul className='p-0 ski'>
          <li>
            <div className="skill_name">HTML</div>
            <div className="skill_progress">
              <span style={{ width: "80%" }} />
            </div>
            <div className="skill_per">80%</div>
          </li>
          <li>
            <div className="skill_name">CSS</div>
            <div className="skill_progress">
              <span style={{ width: "70%" }} />
            </div>
            <div className="skill_per">70%</div>
          </li>
          <li>
            <div className="skill_name">SASS</div>
            <div className="skill_progress">
              <span style={{ width: "90%" }} />
            </div>
            <div className="skill_per">90%</div>
          </li>
          <li>
            <div className="skill_name">JS</div>
            <div className="skill_progress">
              <span style={{ width: "60%" }} />
            </div>
            <div className="skill_per">60%</div>
          </li>
          <li>
            <div className="skill_name">JQUERY</div>
            <div className="skill_progress">
              <span style={{ width: "88%" }} />
            </div>
            <div className="skill_per">88%</div>
          </li>
        </ul>
      </div>
      <div className="resume_item resume_social">
        <div className="title">
          <p className="bold p-0">Social</p>
        </div>
        <ul className='p-0'>
          <li className='align-items-center'>
            <div className="icon">
              <i className="fab fa-facebook-square" />
            </div>
            <div className="data m-0">
              <p className="semi-bold p-0 m-0">Facebook</p>
              <p className='p-0 mb-0'>Stephen@facebook</p>
            </div>
          </li>
          <li className='align-items-center'>
            <div className="icon">
              <i className="fab fa-twitter-square" />
            </div>
            <div className="data m-0">
              <p className="semi-bold p-0 m-0">Twitter</p>
              <p className='p-0 mb-0'>Stephen@twitter</p>
            </div>
          </li>
          <li className='align-items-center'>
            <div className="icon">
              <i className="fab fa-youtube" />
            </div>
            <div className="data m-0">
              <p className="semi-bold p-0 m-0">Youtube</p>
              <p className='p-0 mb-0'>Stephen@youtube</p>
            </div>
          </li>
          <li className='align-items-center'>
            <div className="icon">
              <i className="fab fa-linkedin" />
            </div>
            <div className="data">
              <p className="semi-bold p-0">Linkedin</p>
              <p className='p-0 mb-0'>Stephen@linkedin</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="resume_right">
    <div className="resume_item resume_about">
      <div className="title">
        <p className="bold p-0 mb-0">Summary</p>
      </div>
      <p className='p-2 summary-text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        illo fugit officiis distinctio culpa officia totam atque exercitationem
        inventore repudiandae?
      </p>
    </div>
    <div className="resume_item resume_work">
      <div className="title">
        <p className="bold p-0">Work Experience</p>
      </div>
      <ul>
        <li>
          <div className="company-section">
          <div className="company-name">Netflix co.</div>
          <div className="date">2013 - 2015</div>
          </div>
          <div className="info">
            <p className="semi-bold p-0">Lorem ipsum dolor sit amet.</p>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              voluptatibus!
            </p>
          </div>
        </li>
        <li>
        <div className="company-section">
          <div className="company-name">Netflix co.</div>
          <div className="date">2013 - 2015</div>
          </div>
          <div className="info">
            <p className="semi-bold p-0">Lorem ipsum dolor sit amet.</p>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              voluptatibus!
            </p>
          </div>
        </li>
        <li>
        <div className="company-section">
          <div className="company-name">Netflix co.</div>
          <div className="date">2013 - Present </div>
          </div>
          <div className="info">
            <p className="semi-bold p-0">Lorem ipsum dolor sit amet.</p>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              voluptatibus!
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div className="resume_item resume_education">
      <div className="title">
        <p className="bold p-0">Education</p>
      </div>
      <ul>
        <li>
          <div className="date">2010 - 2013</div>
          <div className="info">
            <p className="semi-bold p-0 education-school">Web Designing (Texas University)</p>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              voluptatibus!
            </p>
          </div>
        </li>
        <li>
          <div className="date">2000 - 2010</div>
          <div className="info">
            <p className="semi-bold p-0 education-school">Texas International School</p>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              voluptatibus!
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div className="resume_item resume_hobby">
      <div className="title">
        <p className="bold p-0">Languages</p>
      </div>
      <div class="language-proficiency">
            <div class="language">
                <span>English</span>
                <div class="dots">
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                </div>
            </div>
            <div class="language">
                <span>French</span>
                <div class="dots">
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
            <div class="language">
                <span>Hindi</span>
                <div class="dots">
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
            <div class="language">
                <span>Bengali</span>
                <div class="dots">
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                    <span class="dot filled"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        </div>
    </div>
    <p className="bold p-0">Hobby</p>
    <div className="interest d-flex justify-content-flex-start gap-2">
        <div class="interest-item">
            <span>Travelling</span>
        </div>
        <div class="interest-item">
            <span>Books</span>
        </div>
        <div class="interest-item">
            <span>Books</span>
        </div>
        <div class="interest-item">
            <span>Books</span>
        </div>
        <div class="interest-item">
            <span>Books</span>
        </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default FirstTemp
