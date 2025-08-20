const sumAll = function(from, to) {
    if (from < 0 || to < 0 ) return 'ERROR';
    if (!Number.isInteger(from) || !Number.isInteger(to)) return 'ERROR';

    let answer = 0
    if (to < from ) {
        temp = to;
        to = from;
        from = temp;
    }
    for (let i = from; i <= to; i++) {
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
