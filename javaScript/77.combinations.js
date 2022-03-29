/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    if (!n || !k) return;

    function dsp(max, n, out = [], cur = [], index = 1) {
        if (cur.length === max) {
            out.push(cur);
            return [];
        } else {
            while (index <= n) {
                dsp(max, n, out, [...cur, index], ++index);
            }
            return out;
        }
    }

    return dsp(k, n);

};