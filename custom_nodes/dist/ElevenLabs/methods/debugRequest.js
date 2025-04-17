"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugRequest = void 0;
async function debugRequest(requestOptions) {
    console.log(requestOptions);
    return requestOptions;
}
exports.debugRequest = debugRequest;
