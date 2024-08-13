const Home = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center pt-[70px]">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4 italic hover:not-italic">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data, and service solutions, Exclusive
          has 10,500 sellers and 300 brands and serves 3 million customers
          across the region.
        </p>
        <p className="text-gray-700">
          Exclusive has more than 1 million products to offer, growing at a very
          fast rate. Exclusive offers a diverse assortment in categories ranging
          from consumer.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fjBES9k7oGVNFmh6JEgJ4Trqk0P8z8zNi0TzUrE7YpeHdZodjqVeOIBvMLxSeHmQzuJNDrDJ3SQcj5~yynFL4GQrfGDnIbWb~SP-qSW8VLkSfzSM4Jzol6lm4~eHQ6~UCtg-E-i4Nvz3OQe8VUPgpd1xWkKAXs2TPOdFUIlBBhTfdxTdHFMnKkiTCO7PI3s3LVcAaltcaIdXRPgsADYLoSum966R5hLB1t63n~vndbOoisIQRSyt-pNtCP2ZxbRZcCHqHB-3VflFgzpAZUHO8D1aZw5uzzCaPWT0uqNI8jveb8Jk7CX3UcG1a6Vt9CtgeD7IgzWC1neNsf50SwY7gw__"
          alt="Our Story"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
