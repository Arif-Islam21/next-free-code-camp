const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="carousel mt-8 w-full">
        {banners.map((banner, idx) => (
          <div
            id={`slide${idx + 1}`}
            key={idx}
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                idx + 1
              }.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
            className="carousel-item min-h-[90vh] relative w-full"
          >
            <div className="h-full w-full flex flex-col  items-center justify-center pl-36">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-white">
                  {banner.title}
                </h1>
                <p className="">{banner.description}</p>
                <div className="gap-6 flex my-4">
                  <button className="btn btn-primary ">Discover More</button>
                  <button className="btn btn-primary btn-outline">
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute  flex bottom-12 right-12 gap-6 transform justify-between">
              <a
                href={banner.prev}
                className="btn btn-circle btn-primary btn-outline"
              >
                ❮
              </a>
              <a
                href={banner.next}
                className="btn btn-circle btn-primary btn-outline"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
