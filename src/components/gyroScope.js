export function getGyroscope(callback) {
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleOrientation, { once: true });
  } else {
    console.log("Gyroscope not found");
  }

  function handleOrientation(event) {
    const alpha = event.alpha; // Rotation around the z-axis
    const beta = event.beta;   // Rotation around the x-axis
    const gamma = event.gamma; // Rotation around the y-axis

    // Your logic for handling orientation data goes here
    console.log(alpha + " " + beta + " " + gamma);

    // Invoke the callback function with the orientation values
    if (typeof callback === 'function') {
      callback({ alpha, beta, gamma });
    }
  }
}

// Example usage:


  