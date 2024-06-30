let timer;
export default function debounce(fn, delay) {
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}

export const EndDateElement = ({ date_to_covert }) => {
    const date = new Date(date_to_covert);

    // Extract day, month, and year
    const day = date.getDate().toString().padStart(2, "0"); // Ensure it's two digits
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed, add 1
    const year = date.getFullYear();

    const formattedDate = `${day} / ${month} / ${year}`;

    return formattedDate;
};