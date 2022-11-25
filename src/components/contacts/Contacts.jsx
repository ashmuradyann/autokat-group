import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'

import './contacts.scss'

const Contacts = ({ contacts }) => {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <h2>Наши контакты</h2>
        <div>
          <p>Тел: 
            <a href="tel:79191866926"> +7 {"(919)"} 186 69-26, </a>
            <a href="tel:79956980777"> +7 {"(995)"} 698 07-77</a>
          </p>
        </div>
        <div>
          <p>Mail: <a href="mailto:autokatgroup@gmail.com">autokatgroup@gmail.com</a></p>
        </div>
      </div>
      <div className="contacts-images">
        <div>
          <img src={image1} alt="imgs" />
        </div>
        <div>
          <img src={image2} alt="imgs" />
        </div>
      </div>
    </div>
  )
}

export default Contacts