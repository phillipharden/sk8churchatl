export const getNextSkateEvent = () => {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();

    const getFridaysForMonth = (y, m) => {
        const fridays = [];
        const date = new Date(y, m, 1);

        while (date.getMonth() === m) {
            if (date.getDay() === 5) {
                fridays.push(new Date(date));
            }
            date.setDate(date.getDate() + 1);
        }

        return fridays;
    };

    let fridays = getFridaysForMonth(year, month);

    const firstFriday = new Date(fridays[0]);
    firstFriday.setHours(19, 0, 0, 0);

    const thirdFriday = new Date(fridays[2]);
    thirdFriday.setHours(19, 0, 0, 0);

    if (now < firstFriday) return firstFriday;
    if (now < thirdFriday) return thirdFriday;

    month += 1;
    if (month > 11) {
        month = 0;
        year += 1;
    }

    fridays = getFridaysForMonth(year, month);

    const nextFirstFriday = new Date(fridays[0]);
    nextFirstFriday.setHours(19, 0, 0, 0);

    return nextFirstFriday;
};

export const formatEventDate = (date) => {
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};