export function dataLoadController() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: 'Xsolla'
            });
        }, 30);
    });
}
