import React from 'react';
import Konva from "konva";
import { Stage, Layer, Text, Rect } from "react-konva";

function App() {
  return (
    <Stage width={500} height={200}>
      <Layer>
        <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={200} />
        <Text
          text='aaaあああ'
          width={500}
          height={200}

          fontFamily='Arial'
          fontSize={100}
          fontStyle='normal'
          textDecoration='empty string'

          align='left'
          verticalAlign='top'

          fill='red'
          fillEnabled={true}

          stroke='green'
          strokeWidth={5}
          fillAfterStrokeEnabled={true}
          strokeEnabled={true}

          shadowColor='blue'
          shadowBlur={5}
          shadowOffset={{ x: 0, y: 0 }}
          shadowOffsetX={0}
          shadowOffsetY={0}
          shadowOpacity={1}
          shadowEnabled={true}

          x={0}
          y={0}

          visible={true}
          opacity={1}

          scale={{ x: 1, y: 1 }}
          scaleX={1}
          scaleY={1}

          rotation={0}
          offset={{ x: 0, y: 0 }}
          offsetX={0}
          offsetY={0}

          fontVariant='normal'
          padding={0}
          lineHeight={1}
          wrap='word'
          ellipsis={false}

          fillPatternX={0}
          fillPatternY={0}
          fillPatternOffset={{ x: 0, y: 0 }}
          fillPatternScale={{ x: 0, y: 0 }}
          fillPatternRotation={0}
          fillPatternRepeat=''
          fillLinearGradientStartPoint={{ x: 0, y: 0 }}
          fillLinearGradientEndPoint={{ x: 0, y: 0 }}
          fillRadialGradientStartPoint={{ x: 0, y: 0 }}
          fillRadialGradientEndPoint={{ x: 0, y: 0 }}
          fillRadialGradientStartRadius={0}
          fillPriority='color'

          hitStrokeWidth={0}
          strokeHitEnabled={true}
          perfectDrawEnabled={true}
          shadowForStrokeEnabled={true}
          strokeScaleEnabled={true}

          lineJoin='miter'
          lineCap='butt'
          dashEnabled={false}
          listening={false}

          id=''
          name=''

          draggable={true}
          dragDistance={10}
        />
      </Layer>
    </Stage>
  );
}

export default App;
