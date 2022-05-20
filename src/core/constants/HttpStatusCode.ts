export type httpStatusCode = {
    ok: number;
    notFound: number;
    unAuthorised: number;
    internalServerError: number;
    badRequest: number;
};

export const httpStatus: httpStatusCode = Object.freeze({
    ok: 200,
    notFound: 404,
    unAuthorised: 401,
    internalServerError: 500,
    badRequest: 400,
});
