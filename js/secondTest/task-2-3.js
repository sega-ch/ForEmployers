const sums1 = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
    ]

const sums2 = [
    [2, 4, 11],
    [1, 2, 5, 6],
    [3, 10, 1],
    [1, 6, 1]
    ]

let sum1 = 0;
let sum2 = 0;

for (let i=0; i < sums1.length; i++)
{
    for (let j = 0; j < sums1[i].length; j++)
    {
        if (sums1[i][j]%2===0) {
            sum1+=sums1[i][j];
        }
    }
}

for (let i=0; i < sums2.length; i++)
{
    for (let j = 0; j < sums2[i].length; j++)
    {
        if (sums2[i][j]%2===0) {
            sum2+=sums2[i][j];
        }
    }
}

if (sum1>sum2){
    console.log("sums1");
}
else console.log("sums2");
