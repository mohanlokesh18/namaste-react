const Shimmer = () => {
  return (
    <div className=" flex flex-wrap justify-between m-[6%]">
      {Array(10)
        .fill("")
        .map((arr, index) => (
          <div
            key={index}
            className="w-[250px] h-[400px] mb-10 bg-gray-100"
          ></div>
        ))}
    </div>
  );
};
export default Shimmer;
