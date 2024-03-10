export function ifEmpty(x) {
    return x == '' || undefined;
}

export function validateDay(d) {
    let valid = true;

    if(d < 1 || d > 31) {
        valid = false;
    }

    return valid;
}

export function validateMonth(m) {
    let valid = true;

    if(m < 1 || m > 12) {
        valid = false;
    }

    return valid;
}

export function validateYear(y) { 
    const now = new Date();
    return y > now.getFullYear();
}

export function getDaysInMonth(m, y) {
    return new Date(y, m, 0).getDate();
}

export function calculate(date) {
    const givenDate = new Date(date);
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - givenDate;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    const years = Math.floor(differenceInDays / 365);
    const remainingDaysAfterYears = differenceInDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = Math.floor(remainingDaysAfterYears % 30);

    return { years, months, days };
}


