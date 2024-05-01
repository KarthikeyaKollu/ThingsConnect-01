export async function getLocation() {
  try {
    const { latitude, longitude } = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position.coords),
        error => reject(new Error("error while getting location"))
      );
    });

    const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    //console.log(`Google Maps Link: ${googleMapsLink}`);
    return googleMapsLink;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Example usage:
