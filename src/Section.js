import "./Section.css";
// props:
// - title: (String) Section Title
// - images: ([]) array containg the images to display in the section
//
const Section = (props) => {
  const images = props.images;
  return (
    <div className="section-div">
      <div className="section-category">
        <h2>{props.category}</h2>
      </div>

      <div className="section-images-div">
        <ul>
          {images.map((image, index) => {
            return (
              <li key={index}>
                <img className="section-img" src={image} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Section;
