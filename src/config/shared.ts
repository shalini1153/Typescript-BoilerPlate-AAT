// All configurations will extend these options
// ============================================

export const config: object = {
    apiName: "aat",
    env: process.env.NODE_ENV,
    corsoptions: {
        origin: process.env.CORSURL,
        methods: "GET,POST",
        allowedHeaders:
            "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token,x-client-secret, Authorization",
    },

    // Server port
    port: process.env.PORT || 8000,

    // Server IP
    ip: process.env.IP || "0.0.0.0",

    // Domain (e.g. https://localhost)
    domain: process.env.DOMAIN,
};
