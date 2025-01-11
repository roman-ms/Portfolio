import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen grid"
      style={{
        gridTemplateRows: "15% 70% 15%", // Top: 20%, Middle: 60%, Bottom: 20%
        gridTemplateColumns: "15% 70% 15%", // Left: 20%, Center: 60%, Right: 20%
        outline: "2px solid red", // Section boundary for debugging
      }}
    >
      {/* Top-left block */}
      <div style={{ outline: "2px solid violet" }}></div>

      {/* Top-center block */}
      <div style={{ outline: "2px solid violet" }}></div>

      {/* Top-right block */}
      <div style={{ outline: "2px solid violet" }}></div>

      {/* Middle-left block */}
      <div style={{ outline: "2px solid violet" }}></div>

      {/* Center block with ComputersCanvas */}
      <div
        style={{
          outline: "2px solid blue", // Center block boundary
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gridColumn: "2", // Middle column
          gridRow: "2", // Middle row
        }}
      >
        <div
          style={{
            width: "100%", // Adjust size to make it larger
            height: "100%",
            outline: "2px solid green", // For ComputersCanvas boundary
          }}
        >
          <ComputersCanvas />
        </div>
      </div>

      {/* Middle-right block */}
      <div style={{ outline: "2px solid violet" }}></div>

      {/* Bottom-left block */}
      <div style={{ outline: "2px solid violet" }}></div>

      {/* Bottom-center block */}
      <div style={{ outline: "2px solid violet" }}></div>

      {/* Bottom-right block */}
      <div style={{ outline: "2px solid violet" }}></div>
    </section>
  );
};

export default Hero;
