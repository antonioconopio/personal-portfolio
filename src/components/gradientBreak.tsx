const GradientBreak = () => {
  return (
    <div className="relative m-auto h-px md:w-[100%] w-[90%] overflow-hidden bg-white/10">
      <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_4s_ease-in-out_infinite]" />
    </div>
  );
};

export default GradientBreak;
