
export const calculateDeliveryCharge = (distance: number, orderTotal: number) => {
    if (isNaN(distance) || distance <= 0) return 0;

    const MAX_DELIVERY_RADIUS = 3; // Urban Binge delivery radius: 0-3km

    // If distance exceeds 3km, delivery not available
    if (distance > MAX_DELIVERY_RADIUS) return -1; // Indicate out of range

    // Logic for Urban Binge:
    // If order < 250 and distance <= 3km, charge ₹35
    if (orderTotal < 250) {
        return 35;
    } else {
        // orderTotal >= 250: Free delivery within 3km
        return 0;
    }
};

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
};
