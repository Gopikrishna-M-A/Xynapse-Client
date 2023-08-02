import React from "react";

export default function Service() {
  return (
    <section id="services">
      <div className="container">
        <div className="trust-banner">
          <div className="circle" style={{ backgroundColor: "#f45050" }}></div>
          <p>OUR SERVICES</p>
        </div>
        <h2 className="s-headline">Your Complete Digital Partner</h2>
        <div className="paragraph">
          <p>
            We are your one-stop destination for all your digital needs. From
            web development to marketing strategies, we offer comprehensive
            solutions tailored to your business. With our expertise and
            dedicated approach, we empower your digital journey and drive your
            success. Trust us as your reliable partner to deliver outstanding
            digital solutions that propel your business forward.
          </p>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="service-img">
            <img
              src="https://img.freepik.com/free-vector/digital-marketing-team-with-laptops-light-bulb-marketing-team-metrics-marketing-team-lead-responsibilities-concept-white-background_335657-2022.jpg?w=900&t=st=1683365749~exp=1683366349~hmac=badc6d0f2427bb34aa06ba5eaa104dacabb95acd71e4763266d374fdae4013ad"
              alt=""
            />
          </div>
          <div className="free">
            <img src="./images/marketing.png" alt="" />
          </div>
          <div className="title">Digital Marketing</div>
          <div className="content">
            <p>
              Xynapse Technologies offers digital marketing solutions, including
              SEO, PPC, social media, content, and email marketing. Using
              data-driven insights and advanced tools, we create customized
              campaigns to boost brand visibility, reach target audiences, and
              drive conversions. Our comprehensive services deliver measurable
              results in the digital era.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="service-img">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IhGijgoVTEs0_4rPuUXboQHaE8%26pid%3DApi&f=1&ipt=9777489add2f29ae2d7dd5045a57c140a0fcfa564a88ad2960de8e9d1a69e871&ipo=images"
              alt=""
            />
          </div>
          <div className="free">
            <img
              src="https://cdn4.iconfinder.com/data/icons/web-development-5/500/responsive-layout-screen-512.png"
              alt=""
            />
          </div>
          <div className="title">Web Development</div>
          <div className="content">
            <p>
              Xynapse Technologies creates visually appealing, user-friendly
              websites. Our developers use latest tech and best practices to
              deliver custom solutions. We collaborate with clients to
              understand their brand, goals, and audience. From responsive
              design to seamless navigation, we ensure your website reflects
              your brand and engages visitors effectively.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="service-img">
            <img
              src="https://img.freepik.com/free-vector/online-shopping-concept_52683-63898.jpg?w=1060&t=st=1683367369~exp=1683367969~hmac=8504b5ee08f5a997e0e859d2845caae82288230526d6214525b8fe1189cf3729"
              alt=""
            />
          </div>
          <div className="free">
            <img
              src="https://cdn1.iconfinder.com/data/icons/ecommerce-and-business-icon-set/256/google-nexus.png"
              alt=""
            />
          </div>
          <div className="title">E Commerce</div>
          <div className="content">
            <p>
              Achieve online retail success with Xynapse Technologies'
              e-commerce solutions. Our tailored services include secure
              platforms, payment gateways, inventory management, personalized
              shopping experiences, and efficient order fulfillment. Drive
              conversions, revenue growth, and customer satisfaction with our
              user-friendly and visually appealing e-commerce solutions.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="service-img">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KPE9YqPuD8xCVAOEwXD-UAHaE8%26pid%3DApi&f=1&ipt=aba17784015792f1ede5d2a2f4b1f521540197ba1c25aab2980f0f12d1aabb6a&ipo=images"
              alt=""
            />
          </div>
          <div className="free">
            <img
              src="https://cdn4.iconfinder.com/data/icons/coronavirus-flat/64/mobile-news-app-follow-read-64.png"
              alt=""
            />
          </div>
          <div className="title">App Development</div>
          <div className="content">
            <p>
              In the mobile-driven world, Xynapse Technologies delivers powerful
              and intuitive mobile applications. Our services span iOS and
              Android platforms, offering native, hybrid, and cross-platform
              solutions. Our skilled developers prioritize intuitive interfaces,
              robust functionality, and seamless integration, ensuring your app
              excels in the competitive market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
