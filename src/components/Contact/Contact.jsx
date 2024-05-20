import "./Contact.css";

const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="c-left">Left</div>

        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
