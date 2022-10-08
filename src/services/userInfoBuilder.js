class userInfos {
    constructor(firstName = "", lastName = "", age = 0) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

class keyData {
    constructor(calorieCount = 0, proteinCount = 0, carbohydrateCount = 0, lipidCount = 0) {
        this.calorieCount = calorieCount
        this.proteinCount = proteinCount
        this.carbohydrateCount = carbohydrateCount
        this.lipidCount = lipidCount
    }
}

class userInfo {
    constructor(id = 0, userInfos = null, score = 0, keyData = null) {
        this.id = id
        this.userInfos = userInfos
        this.score = score
        this.keyData = keyData
    }
}

export class userInfoBuilder {
    constructor() {
        this.userInfo = new userInfo()
    }

    setId(value) {
        this.userInfo.id = value
        return this
    }

    setUserInfos(value) {
        this.userInfo.userInfos = new userInfos(value.firstName, value.lastName, value.age)
        return this
    }

    setScore(value) {
        this.userInfo.score = value
        return this
    }

    setKeyData(value) {
        this.userInfo.keyData = new keyData(value.calorieCount, value.proteinCount, value.carbohydrateCount, value.lipidCount)
        return this
    }

    build() {
        return this.userInfo
    }
}