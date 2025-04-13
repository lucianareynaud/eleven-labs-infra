"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugRequest = debugRequest;
async function debugRequest(requestOptions) {
    console.log(requestOptions);
    return requestOptions;
}
