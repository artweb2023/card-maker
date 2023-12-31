import { Size } from "../../../../model/types";

type ArtPolygonViewProps = {
  color: string;
  size: Size;
};

function ArtPolygonView({
  color,
  size: { width, height },
}: ArtPolygonViewProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.1847 3.88C22.3684 3.73074 22.6316 3.73074 22.8153 3.88L41.4783 19.0437C41.6375 19.173 41.7015 19.3866 41.6397 19.5823L34.6116 41.8381C34.5459 42.0461 34.353 42.1875 34.1348 42.1875H10.8652C10.647 42.1875 10.4541 42.0461 10.3884 41.8381L3.36025 19.5823C3.29846 19.3866 3.36249 19.173 3.52175 19.0437L22.1847 3.88ZM44.8976 18.6055C44.9594 18.4098 44.8954 18.1962 44.7361 18.0668L22.8153 0.256178C22.6316 0.106921 22.3684 0.106921 22.1847 0.256178L0.26388 18.0668C0.104626 18.1962 0.0405948 18.4098 0.102385 18.6055L8.32715 44.6506C8.39284 44.8586 8.5858 45 8.80394 45H36.1961C36.4142 45 36.6072 44.8586 36.6728 44.6506L44.8976 18.6055Z"
        fill={color}
      />
    </svg>
  );
}

export { ArtPolygonView };
