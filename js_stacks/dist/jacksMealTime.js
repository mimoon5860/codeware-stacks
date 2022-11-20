"use strict";
const jacksMealTime = (time) => {
    const gaveHour = Number(time.split(':')[0]);
    const meridiem = time.split(' ')[1];
    const noGaveHour = gaveHour < 9 ? '0' + gaveHour : '' + gaveHour;
    const hour = meridiem === 'a.m.' ? noGaveHour : Number(gaveHour) + 12;
    const mint = time.split(' ')[0].split(':')[1];
    const date = new Date();
    const dateString = date.toISOString().split('T')[0];
    const currentDate = dateString + 'T' + hour + ':' + mint + ':00';
    const currentTime = new Date(currentDate);
    let breakfastTime = new Date(dateString + 'T07:00:00');
    const lunchTime = new Date(dateString + 'T12:00:00');
    const dinnerTime = new Date(dateString + 'T19:00:00');
    const restTime = [];
    let message = '';
    if (Number(hour) >= 19 && Number(mint) > 0) {
        breakfastTime = new Date(new Date(date.setDate(date.getDate() + 1)).toISOString().split('T')[0] + 'T07:00:00');
    }
    if ((Number(hour) >= 1 && Number(hour) < 7) || (Number(hour) >= 19)) {
        if (Number(hour) === 19 && Number(mint) === 0) {
            restTime.push(0);
            restTime.push(0);
            message = `0 hour and 0 minute for next meal, dinner`;
        }
        else {
            const comTime = Math.abs(breakfastTime - currentTime);
            const comHours = Math.floor(comTime / (1000 * 60 * 60));
            const comMin = Math.ceil(comTime / (1000 * 60)) % 60;
            restTime.push(comHours);
            restTime.push(comMin);
            message = `${comHours} hour and ${comMin} minute for next meal, breakfast`;
        }
    }
    if (Number(hour) >= 7 && Number(hour) < 12) {
        if (Number(hour) === 7 && Number(mint) === 0) {
            restTime.push(0);
            restTime.push(0);
            message = `0 hour and 0 minute for next meal, breakfast`;
        }
        else {
            const comTime = Math.abs(lunchTime - currentTime);
            const comHours = Math.floor(comTime / (1000 * 60 * 60));
            const comMin = Math.ceil(comTime / (1000 * 60)) % 60;
            restTime.push(comHours);
            restTime.push(comMin);
            message = `${comHours} hour and ${comMin} minute for next meal, lunch`;
        }
    }
    if (Number(hour) >= 12 && Number(hour) < 19) {
        if (Number(hour) === 12 && Number(mint) === 0) {
            restTime.push(0);
            restTime.push(0);
            message = `0 hour and 0 minute for next meal, lunch`;
        }
        else {
            const comTime = Math.abs(dinnerTime - currentTime);
            const comHours = Math.floor(comTime / (1000 * 60 * 60));
            const comMin = Math.ceil(comTime / (1000 * 60)) % 60;
            restTime.push(comHours);
            restTime.push(comMin);
            message = `${comHours} hour and ${comMin} minute for next meal, dinner`;
        }
    }
    return {
        restTime,
        message
    };
};
const nextMeal = jacksMealTime('5:50 a.m.');
console.log(nextMeal);
