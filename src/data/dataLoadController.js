export function dataLoadController() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: 'John Snow'
            });
        }, 30);
    });
}
