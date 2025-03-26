import { useState } from "react";

export default function ImageResizer() {
  const [size, setSize] = useState(100); // Initial size (width & height)

  const increaseSize = () => setSize((prev) => prev + 20);
  const decreaseSize = () => setSize((prev) => (prev > 20 ? prev - 20 : prev));

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img
        src="https://via.placeholder.com/150"
        alt="Resizable"
        width={size}
        height={size}
        className="transition-all duration-300"
      />
      <div className="flex gap-2">
        <button onClick={increaseSize} className="px-4 py-2 bg-blue-500 text-white rounded">
          Increase Size
        </button>
        <button onClick={decreaseSize} className="px-4 py-2 bg-red-500 text-white rounded">
          Decrease Size
        </button>
      </div>
    </div>
  );
}
