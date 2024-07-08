const config = {
    testEnvironment: 'jsdom',
    globals: {
        Client: {
            checkValidUrl: () => { }
        }
    },
};

module.exports = config;