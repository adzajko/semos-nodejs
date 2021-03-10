/**
 * Callback demo function.
 * @param {*} callBackFunction the callback function that gets executed after the timeout finishes.
 */
exports.callBackOne = (callBackFunction) => {
    setTimeout(() => {
        const dbData = [1, 2, 3];
        console.log('Resolved via callback!');
        callBackFunction(dbData);
    }, 500)
}