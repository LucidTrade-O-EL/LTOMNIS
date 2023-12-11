import React from 'react';
import { Skia, useDrawCallback, SkCanvas } from "@shopify/react-native-skia";

const OMNISGraph = () => {
  // Define the graph data
  const data = [10, 20, 30, 40, 50];

  // Drawing the graph
 const drawGraph = useDrawCallback((canvas: SkCanvas, width: number, height: number): void => {
    const paint = Skia.Paint();
    paint.setColor(Skia.Color("#007AFF"));
    paint.setStrokeWidth(2);
    paint.setAntiAlias(true);

    // Create a new path using the factory method
    const path = Skia.Path.Make();
    data.forEach((point, index) => {
      const x = (width / (data.length - 1)) * index;
      const y = height - (height * point) / 50; // Adjust based on data scale
      if (index === 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    });

    canvas.drawPath(path, paint);
  }, [data]);

  // Render the canvas
  return (
    <Skia.Canvas style={{ flex: 1 }} onDraw={drawGraph} />
  );
};

export default OMNISGraph;
