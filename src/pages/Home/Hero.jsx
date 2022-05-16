import bucketGirl from '../../assets/images/bucketgirl.png';

const Hero = () => {
  return (
    <>
      {/* TOP SECTION BANNER */}
      <div className="hero lg:h-[60vh] bg-accent mt-16 lg:mt-0">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
              className="text-2xl lg:text-5xl font-bold max-w-lg"
            >
              Professional Cleaning Service
            </h1>
            <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has
            </p>
            <button
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="900"
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1200"
            className="lg:h-[58vh] flex items-center lg:items-end  relative z-10 mt-[-25px]"
          >
            <img
              src={bucketGirl}
              className="w-full max-w-lg max-h-[50vh]"
              alt="A girl standing with a bucket in her hand"
            />
          </div>
        </div>
      </div>
      {/* TOP SECTION BANNER ENDS*/}

      {/* FORM SECTION */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
        className="shadow-lg p-10 rounded-xl lg:w-5/6 mx-auto mt-[-35px] bg-base-200 z-20 relative "
      >
        <h2 className="text-center lg:text-left text-primary capitalize font-normal text-2xl lg:text-3xl">
          Get free estimate
        </h2>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Type of cleaning"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Number of bedrooms"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Number of bedrooms"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Number of bedrooms"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Number of bedrooms"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Number of bedrooms"
            className="input input-bordered w-full max-w-md"
          />

          <button className="btn btn-primary lg:w-1/2">REQUEST A QOUTE</button>
        </div>
      </div>
      {/* FORM SECTION ENDS*/}
    </>
  );
};

export default Hero;
