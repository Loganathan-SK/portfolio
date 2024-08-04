import ReactImg from '../assets/React - Udemy.jpg';
import WebImg from '../assets/responsive-web-design.png';
import JavaImg from '../assets/Java DSA.jpg';
import JSImg from '../assets/Javascript.png';

export default function Certifications(){
  return (
    <div>
      <div className="grid-image">
        <div className="grid-item">
          <div className='frame'>
            <img src={ReactImg} alt="React" />
            <h5 id='verify'>React</h5>
            <h5>Platform: Udemy</h5>
            <h5>Certified on: July 11, 2024</h5>
            <h5 id='verify'>Verify</h5>
          </div>
        </div>
        <div className="grid-item">
          <div className='frame'>
            <img src={WebImg} alt="Web" />
            <h5 id='verify'>Responsive Web Design</h5>
            <h5>Platform: FreeCodeCamp</h5>
            <h5>Certified on: March 12, 2024</h5>
            <h5 id='verify'>Verify</h5>
          </div>
        </div>
        <div className="grid-item">
          <div className='frame'>
            <img src={JavaImg} alt="Java" />
            <h5 id='verify'>Java DSA</h5>
            <h5>Platform: Udemy</h5>
            <h5>Certified on: July 13, 2024</h5>
            <h5 id='verify'>Verify</h5>
          </div>
        </div>
        <div className="grid-item">
          <div className='frame'>
            <img src={JSImg} alt="Javascript" />
            <h5 id='verify'>Javascript</h5>
            <h5>Platform: Scaler</h5>
            <h5>Certified on: March 19, 2024</h5>
            <h5 id='verify'>Verify</h5>
          </div>
        </div>
      </div>
      <div id='additional'>
        <h3>Additional Certifications</h3>
        <ul>
          <li>Java Developer Certification</li>
          <li>Web Development</li>
        </ul>
      </div>
    </div>
  );
}