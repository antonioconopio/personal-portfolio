// CSS-only hero background: spotlit dot grid that eases into black.
// Only animates opacity, so it stays on the GPU and costs no JS.
const GridHorizon = ({ className = "" }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={`absolute top-0 left-0 w-full h-full overflow-hidden bg-black ${className}`}
    >
      <div className="grid-horizon-dots" />
      <div className="grid-horizon-glow" />
      <div className="grid-horizon-scan" />
      <div className="grid-horizon-fade" />
    </div>
  );
};

export default GridHorizon;
