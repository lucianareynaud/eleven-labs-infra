"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSearch = void 0;
exports.listSearch = {
    async listVoices() {
        const results = await this.helpers.httpRequestWithAuthentication.call(this, 'elevenLabsApi', {
            url: `https://api.elevenlabs.io/v1/voices`,
        });
        const returnData = results.voices.map((result) => {
            return {
                name: result.name + (result.category == 'premade' ? ' (Premade)' : ''),
                value: result.voice_id,
            };
        });
        return {
            results: returnData.reverse(),
        };
    },
};
