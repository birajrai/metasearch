"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight = void 0;
exports.request = request;
exports.autoComplete = autoComplete;
const parser_1 = require("../../parser");
async function request(query) {
    return await (0, parser_1.parseResultList)('https://search.brave.com/search?q=' + encodeURIComponent(query), {
        resultItemPath: '#results > .fdb',
        titlePath: '.snippet-title',
        hrefPath: '.result-header',
        contentPath: '.snippet-description',
        suggestionPath: '.altered-query > .h6 > a',
    });
}
async function autoComplete(query) {
    if (!query.trim())
        return [];
    const data = await (0, parser_1.requestJSON)('https://search.brave.com/api/suggest?q=' + query);
    return data[1];
}
exports.weight = 1.2;
