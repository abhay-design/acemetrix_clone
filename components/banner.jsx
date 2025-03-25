import Link from "next/link";
const Banner = () => {
  return (
    <section className="banner min-h-[964px] flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="banner-video object-cover"
        width={1000}
        height={964}
      >
        <source src="/videos/home-kayak.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="wrapper text-center">
          <h1 className="text-white">
            Ace Metrix Measures the Impact of Video Advertising
          </h1>
          <h2 className="text-white">
            Technology, tools and insights to design creative to drive business
            results
          </h2>
          <div className="btn-wrap relative">
            <Link href="#" className="btn-clear">
              Watch Video
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
