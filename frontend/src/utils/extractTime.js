export default function extractTimeFromCreatedAt(createdAtString) {
    // Convert the MongoDB createdAt string to a JavaScript Date object
    const createdAtDate = new Date(createdAtString);

    // Extract hours and minutes from the createdAtDate
    const hours = createdAtDate.getHours();
    const minutes = createdAtDate.getMinutes();

    // Format the time as hh:mm
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return formattedTime;
}

