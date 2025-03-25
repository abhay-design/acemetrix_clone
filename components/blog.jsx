import Link from "next/link";
const Blog = () => {
  const data = [
    {
      upperbar: "Creative Rules Blog",
      lowerbar: "Ace Metrix Year in Review: 2020’s Stand Out Ads",
      link: "#",
    },
    {
      upperbar: "Creative Rules Blog",
      lowerbar: "Ace Metrix Year in Review: 2020’s Stand Out Ads",
      link: "#",
    },
    {
      upperbar: "Creative Rules Blog",
      lowerbar: "Ace Metrix Year in Review: 2020’s Stand Out Ads",
      link: "#",
    },
  ];
  return (
    <section className="featured-blog no-padding">
      <div className="wrapper flex flex-wrap">
        {data.map((wrap, index) => (
          <div className="col-three relative" key={index}>
            <div className="box-header relative">
              <Link className="emptylink" href={wrap.link}>
                .
              </Link>
              <h5>{wrap.upperbar}</h5>
              <h4>{wrap.lowerbar}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Blog;
