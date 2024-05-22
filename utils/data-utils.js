export function checkExpiredCart(created) {
    const createdTime = new Date(created).getTime()
    const now = new Date().getTime()
    const limit = 1000 * 60 * 10
    const timeLimit = createdTime + limit
    if (now > timeLimit) {
        return false
    }
    else {
        false
    }

}

export const replaceIDinArray = (array) => {
    const mappedArray = array.map(item => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest)
    return mappedArray
}
export const replaceObjectId = (obj) => {
    const { _id, ...updatedObj } = {
        ...obj, id: obj._id.toString()
    }
    return updatedObj
}