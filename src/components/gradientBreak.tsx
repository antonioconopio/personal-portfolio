const GradientBreak = () => {
  return (
    <div className="relative m-auto h-1 md:w-[100%] w-[90%] overflow-hidden rounded-full">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[gradientMove_3s_linear_infinite]" />
    </div>
  );
};

export default GradientBreak;
