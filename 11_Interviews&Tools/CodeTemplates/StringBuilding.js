
// arr is a list of characters
let fn = arr => {
    let ans = [];
    for (const c of arr) {
        ans.push(c);
    }

    return ans.join("")
}

let fn2 = arr => {
    let ans = "";
    for (const c of arr) {
        ans += c;
    }

    return ans;
}