export default function GlassBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob card-gradient-1"
        style={{ width: 420, height: 420, top: -120, left: -80 }}
      />
      <div
        className="blob card-gradient-2"
        style={{ width: 360, height: 360, top: 100, right: -100, opacity: 0.6 }}
      />
      <div
        className="blob card-gradient-3"
        style={{ width: 500, height: 500, bottom: -180, left: "35%", opacity: 0.45 }}
      />
    </div>
  );
}
