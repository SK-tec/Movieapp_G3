import Emoji from "./thinking.png";
import Image from "./filmabout.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="heading-container">
        <i className="fi fi-rr-popcorn" id="popcorn-icon"></i>
        <h1 className="about-title">About Apiflix</h1>
        <i class="fi fi-rr-film" id="film-icon"></i>
      </div>
      <div className="about-text-container">
        <p className="about-text">
          Dear movie fans, We are thrilled to welcome you to our movie blog
          page! Whether you're a die-hard cinephile or just love to watch a good
          flick every now and then, this is the place for you. Our team of
          passionate movie buffs is here to bring you the latest news, reviews,
          and insights from the world of cinema. We cover everything from
          Hollywood blockbusters to indie darlings, from classic films to the
          hottest new releases. Our goal is to provide you with a wide variety
          of content that will keep you entertained, informed, and engaged. But
          this is not just a one-way conversation. We want to hear from you too!
          Share your thoughts, opinions, and recommendations with us. Let us
          know what movies you love, which ones you hate, and what you're
          excited to see next. So whether you're looking for movie
          recommendations, industry news, or just a place to geek out about your
          favorite films, you've come to the right place. Join us on this
          cinematic journey and let's explore the world of movies together.
          Thank you for visiting our movie blog page. We can't wait to hear from
          you! Best regards, Your Apiflix team.
        </p>
        <div className="howto-text-container">
          <div className="howto-title-container">
            <img src={Emoji} width="60" alt="Emoji"></img>
            <h3 className="about-title">How to use the App?</h3>
          </div>

          <p className="howto-text">
            We want you to have an amazing experience streaming and enjoying
            your favorite movies, here you will find some steps to follow:
          </p>
          <div className="howto-steps-container">
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
            <img src={Image} width="300" alt="Movie"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
