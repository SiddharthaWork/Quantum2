import React from 'react';

const BlueLine = () => {
  return (
    <div
      style={{
        height: '1px', // Adjust the height of the line
        width: '50%', // Set the width to be half of the container
        backgroundColor: '#00a2ff', // Set the color to blue
        position: 'absolute', // Use absolute positioning
        left: '0', // Position the line from the left edge of its container
        top: '0', // Align the line to the top of its container
      }}
    ></div>
  );
};

export default BlueLine;
