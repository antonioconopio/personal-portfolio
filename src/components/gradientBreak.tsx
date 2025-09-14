const GradientBreak = () => {
  return (
    <div className="relative w-full h-1 overflow-hidden rounded-full">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[gradientMove_3s_linear_infinite]" />
    </div>
  );
};

export default GradientBreak;
