/** Class representing a user's infos. */
class userInfos {
    /**
        * Create user's infos.
        * @param {string} firstName - The user's firstName.
        * @param {string} lastName - The user's lastName.
        * @param {number} age - The user's age.
    */
    constructor(firstName = "", lastName = "", age = 0) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

/** Class representing a user's keyData. */
class keyData {
    /**
        * Create user's keyData.
        * @param {number} calorieCount - The user's calorieCount.
        * @param {number} proteinCount - The user's proteinCount.
        * @param {number} carbohydrateCount - The user's carbohydrateCount.
        * @param {number} lipidCount - The user's lipidCount.
    */
    constructor(calorieCount = 0, proteinCount = 0, carbohydrateCount = 0, lipidCount = 0) {
        this.calorieCount = calorieCount
        this.proteinCount = proteinCount
        this.carbohydrateCount = carbohydrateCount
        this.lipidCount = lipidCount
    }
}

/** Class representing a user. */
class userInfo {
    /**
        * Create a user.
        * @param {number} id - The user's id.
        * @param {object} userInfos - The user's infos.
        * @param {number} score - The user's score.
        * @param {object} keyData - The user's keyData.
    */
    constructor(id = 0, userInfos = null, score = 0, keyData = null) {
        this.id = id
        this.userInfos = userInfos
        this.score = score
        this.keyData = keyData
    }
}

/** Class creating a user. */
export class userInfoBuilder {
    /**
        * Create a user.
    */
    constructor() {
        this.userInfo = new userInfo()
    }

    /**
        * Set a user ID.
        * @param {number} value - The user's id fetched from API.
        * @return the builder
    */
    setId(value) {
        this.userInfo.id = value
        return this
    }

    /**
        * Set a user's infos.
        * @param {object} value - The user's infos fetched from API.
        * @return the builder
    */
    setUserInfos(value) {
        this.userInfo.userInfos = new userInfos(value.firstName, value.lastName, value.age)
        return this
    }

    /**
        * Set a user's score.
        * @param {number} value - The user's score fetched from API.
        * @return the builder
    */
    setScore(value) {
        this.userInfo.score = value
        return this
    }

    /**
        * Set a user's keyData.
        * @param {object} value - The user's keyData fetched from API.
        * @return the builder
    */
    setKeyData(value) {
        this.userInfo.keyData = new keyData(value.calorieCount, value.proteinCount, value.carbohydrateCount, value.lipidCount)
        return this
    }

    /**
        * Build the user object.
        * @return a user with the correct data set.
    */ 
    build() {
        return this.userInfo
    }
}