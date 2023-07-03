/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

export const monthNames = [
    "Janurary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novermber",
    "December"
];

/**
 * 
 * @param {number} dateUnix 
 * @param {number} timeZone 
 * @returns {string}
 */

export const getDate = function(dateUnix, timeZone) {
    const date = new Date((dateUnix+timeZone)*1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];
    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * 
 * @param {number} timeUnix 
 * @param {number} timezone 
 * @returns {string}
 */

export const getTime = function(timeUnix, timezone){
    const date = new Date((timeUnix+timezone)*1000);
    const hours = date.getUTCHours();
    const minates = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours%12 || 12}:${minates}${period}`;
}

/**
 * 
 * @param {number} timeUnix 
 * @param {number} timezone 
 * @returns {string}
 */
export const getHour = function(timeUnix, timezone){
    const date = new Date((timeUnix+timezone)*1000);
    const hours = date.getUTCHours();
    const period = hours >= 12?"PM" : "AM";
    return `${hours%12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps 
 * @returns {number}
 */

export const mps_to_kmh = mps => {
    const mph =mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air condition is considered satisfactory."
    },
    2: {
        level: "Fair",
        message: "Air condition is acceptable."
    },
    3: {
        level: "Moderate",
        message: "Air condition is not so good."
    },
    4: {
        level: "Poor",
        message: "Air condition is bad."
    },
    5: {
        level: "Very Poor",
        message: "Air condition is considered emergency."
    },

}
