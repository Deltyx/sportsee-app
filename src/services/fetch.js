import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './../data/mockedData.js';

const server = 'http://localhost:3000/'
const MOCKED_DATA = false


/**
    * Fetch the user's data from the server
    * @param {uri} uri - uri depending on the source of the data
    * @returns a promise
*/

function getAPIUserData(uri){
    return fetch(server + uri)
        .then(response => response.json())
        .then(response => response.data)
}

/**
    * Fetch the user's main data from the server
    * @param {number} userId - userId fetched from url
    * @returns a promise
*/

function getAPIUserDataMain(userId){
    if(MOCKED_DATA === true) {
        return new Promise(function(resolve, reject) {
            resolve(USER_MAIN_DATA.find(userData => (userData.id).toString() === userId))
        })
    }
    return getAPIUserData('user/' + userId)
}

/**
    * Fetch the user's activity data from the server
    * @param {number} userId - userId fetched from url
    * @returns a promise
*/

function getAPIUserDataActivity(userId){
    if(MOCKED_DATA === true) {
        return new Promise(function(resolve, reject) {
            resolve(USER_ACTIVITY.find(userActivity => (userActivity.userId).toString() === userId))
        })
    }
    return getAPIUserData('user/' + userId + '/activity')
}

/**
    * Fetch the user's average data from the server
    * @param {number} userId - userId fetched from url
    * @returns a promise
*/

function getAPIUserDataAverage(userId){
    if(MOCKED_DATA === true) {
        return new Promise(function(resolve, reject) {
            resolve(USER_AVERAGE_SESSIONS.find(userSessionDuration => (userSessionDuration.userId).toString() === userId))
        })
    }
    return getAPIUserData('user/' + userId + '/average-sessions')
}

/**
    * Fetch the user's performance data from the server
    * @param {number} userId - userId fetched from url
    * @returns a promise
*/

function getAPIUserDataPerformance(userId){
    if(MOCKED_DATA === true) {
        return new Promise(function(resolve, reject) {
            resolve(USER_PERFORMANCE.find(userPerformance => (userPerformance.userId).toString() === userId))
        })
    }
    return getAPIUserData('user/' + userId + '/performance')
}

export {getAPIUserDataMain, getAPIUserDataActivity, getAPIUserDataAverage, getAPIUserDataPerformance}