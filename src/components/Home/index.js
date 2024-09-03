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
          src="https://img.freepik.com/free-photo/happy-pretty-asian-woman-carrying-colorful-shopping-bags-isolated-yellow-studio-background_74952-4056.jpg?size=626&ext=jpg&ga=GA1.1.1313484717.1725344409&semt=ais_hybrid"
          alt="Our Story"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
