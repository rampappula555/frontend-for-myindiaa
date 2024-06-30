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
          src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7P3oLFsrbKLUw9B8qAFilicdcvmJYS7l-TC6AZTV6Dmdk~P5QZtN2d8pHnblJ24E~1ehkRC7efEdA~FlR-ChBRZydgpgmACOEKSo~YqyuQGCU1zraUB18a9jil8aGqwthKNy5wezPtubPBpTAMIqdV-42EooeQCOE3WLnxta5wiPCYc59aN6qT16sHDdxoNU8DDIIwXHs6neJ4XmoiIj2Aq4RgOvh27OdCCJGHpNCdqNcuA-Krgo36vi49xdfXzJlju5heAClzzTNJoHCXjxNDogXcjK5s57i~DTzliI0KvEJxVXHdv0KxnyQO~xxMAzdX9E6sWP9oe9C9l2RHxpQ__"
          alt="Our Story"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
