/**
 * Async programming made possible with Promises.
 * @returns {Promise<string>}
 */
exports.promiseDemoOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved from Promise!');
        }, 500);
    })
}