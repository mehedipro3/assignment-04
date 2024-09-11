function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 && income >= expenses) {
        return "Invalid Input";
    }
    const salary = income - expenses;
    const tax = salary * 20 / 100;
    return tax;
}



function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    const [username, domain] = email.split('@');
    return username + ' sent you an email from ' + domain;;
}


function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    let check = false;
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9') {
            check = true;
        }
    }
    return check;
}


function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    let Score = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
        Score += 20;
    }
    if (Score >= 80) {
        return true;
    }
    else {
        return false;
    }
}

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    const len = waitingTimes.length;
    let sum = 0;
    for (const time of waitingTimes) {
        sum = sum + time;
    }
    const avg = Math.round(sum / len);
    const serial = serialNumber - 1 - len;
    return serial * avg;
}


