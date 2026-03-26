var isMatch = function (s, p) {

    let memo = {};

    function match(i, j) {

        let key = `${i},${j}`;

        console.log(`\n===== match(${i}, ${j}) =====`);

        // Check memo
        if (key in memo) {
            console.log(` Cache Hit: memo["${key}"] = ${memo[key]}`);
            return memo[key];
        }

        // Base Case
        if (j === p.length) {
            let result = i === s.length;

            console.log(
                ` Pattern finished -> i=${i}, s.length=${s.length}`
            );

            console.log(`Return ${result}`);

            memo[key] = result;
            return result;
        }

        // Current match check
        const firstMatch =
            i < s.length &&
            (s[i] === p[j] || p[j] === ".");

        console.log(
            `Compare: s[${i}]="${s[i]}" vs p[${j}]="${p[j]}"`
        );

        console.log(`firstMatch = ${firstMatch}`);

        let result;

        // Star case
        if (j + 1 < p.length && p[j + 1] === "*") {

            console.log(
                ` Found '*' after '${p[j]}'`
            );

            console.log(
                ` Option 1: Skip "${p[j]}*" => match(${i}, ${j + 2})`
            );

            const skipStar = match(i, j + 2);

            console.log(
                ` Result of match(${i}, ${j + 2}) = ${skipStar}`
            );

            let useStar = false;

            if (firstMatch) {

                console.log(
                    ` Option 2: Use "${p[j]}*" => match(${i + 1}, ${j})`
                );

                useStar = match(i + 1, j);

                console.log(
                    ` Result of match(${i + 1}, ${j}) = ${useStar}`
                );
            }

            result = skipStar || useStar;

            console.log(
                ` Final Result = ${skipStar} || ${useStar} = ${result}`
            );

        } else {

            console.log(
                ` Normal Match => match(${i + 1}, ${j + 1})`
            );

            result =
                firstMatch &&
                match(i + 1, j + 1);

            console.log(
                ` Result = ${result}`
            );
        }

        memo[key] = result;

        console.log(
            ` Save memo["${key}"] = ${result}`
        );

        return result;
    }

    return match(0, 0);
};

const result = isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*c");

console.log("FINAL RESULT =>", result);