export const jwtConstants = {
    secret: process.env.JWT_SECRET || 'DO_NOT_USE_THIS_SECRET_IN_PROD',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'DO_NOT_USE_THIS_REFRESH_SECRET_IN_PROD',
};
