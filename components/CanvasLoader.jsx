import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
       <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-300"></div>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
       Loading {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;