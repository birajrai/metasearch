"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight = exports.request = void 0;
// searching "metasearch" will show metasearch as the top result
async function request(query, req) {
    if (/^(what( i|'|)s )?(the )?best (meta ?)?search engine$/i.test(query))
        return {
            answer: {
                title: 'Metasearch',
                content: 'Metasearch is the best (meta)search engine.',
                url: 'https://s.matdoes.dev'
            },
            results: [{
                    title: 'Metasearch',
                    position: 1,
                    content: 'The best (meta)search engine',
                    url: 'https://s.matdoes.dev',
                }]
        };
    else if (query.trim() === '') {
        const choices = [
            {
                content: 'You should give me a star on GitHub.',
                title: 'mat-1/metasearch - GitHub',
                url: 'https://github.com/mat-1/metasearch',
            },
            {
                content: 'This website was made by mat.',
                title: 'mat does dev',
                url: 'https://matdoes.dev'
            },
            {
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                title: 'Funny video - YouTube'
            }
        ];
        if (req.theme === 'dark') {
            choices.push({
                content: 'Fun fact, you can change the theme by going to the settings page.',
                url: `https://${req.hostname}/settings`
            });
        }
        else if (req.theme === 'light') {
            choices.push({
                content: 'Fun fact, you can change the theme to something other than light theme by going to the settings page.',
                url: `https://${req.hostname}/settings`
            });
        }
        return {
            answer: choices[Math.floor(Math.random() * choices.length)]
        };
    }
    else
        return {};
}
exports.request = request;
exports.weight = 100;
