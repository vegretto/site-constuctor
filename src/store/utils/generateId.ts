export const generateId = (array: Array<Record<'id', number>>) => {
    if (!array.length) return 0

    const largestId = Math.max(...array.map(item => item.id))
    return largestId + 1
}