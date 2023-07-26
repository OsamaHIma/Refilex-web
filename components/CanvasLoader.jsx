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
       <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-300"></div>
      <p
      className="text-xl text-gray-500 font-bold mt-8"

      >
       Loading <span className="text-orange-400">{progress.toFixed(2)}</span>%
      </p>
    </Html>
  );
};

export default CanvasLoader;