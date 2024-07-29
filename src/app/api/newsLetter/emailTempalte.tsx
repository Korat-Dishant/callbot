import * as React from "react";

export const EmailTemplate = () => (
  <div className="bg-dark text-white pb-10">
    <div className="flex justify-center items-center py-10">
      <img
        alt="Equillect"
        src={"https://drive.google.com/uc?id=1mReUzD5uPXlP6MaEDmmTt60LeKNnLPES"}
        className="max-md:w-screen h-auto md:w-80 "
      />
    </div>
    <h6 className="font-primary font-semibold text-center heading5 md:text-4xl" style={{fontWeight:"bold",textAlign:"center", fontSize: "2rem"}}>
      Welcome to Equillect Newsletter
    </h6>
    <p className="text-center md:text-2xl md:py-2" style={{textAlign:"center", fontSize: "1.5rem" , padding:"20px"}}>Thanks for subscribing to our newsletter.</p>
    <div className="flex justify-center items-center py-10">
      <img
        alt="Equillect"
        src={"https://drive.google.com/uc?id=1OfB5F3axTAK7ybbi1EXeCN5atxzInar8"}
        className="max-md:w-screen h-auto md:w-40"
      />
    </div>
    <p className="text-center caption text-white/70 max-md:max-w-80 mx-auto md:text-lg" style={{textAlign:"center", fontSize: "1.125rem" , padding:"20px"}}>
      Get latest update on finance world. Want funding for your own startup?
      visit our
      <a className="text-primary-light" href={"https://www.equillect.com"} style={{color:"#00ff9b"}}>
        website
      </a>
      and fillout the
      <a
        className="text-primary-light"
        href={"http://www.equillect.com/#onboarding-form"}
        style={{color:"#00ff9b"}}
      >
        Help us know you better form
      </a>
      to get access to our investor pool.
    </p>
  </div>
);
