import {SCORES, COUNTS, ALPHA} from './constants';

export const generateTokens = function(){
    const m = [...ALPHA].map(c => c.repeat(COUNTS[c]));
    const tokens = m.reduce((a, v) => {
        return [...a, ...[...v]]
    }, []);
    return tokens.sort(_ => Math.random() - 0.5);
}