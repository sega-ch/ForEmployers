const sums = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
    ]

let max = 0;
let min = 0;
let avarage = 0;
let sum = 0;
let count = 0;

for (let i=0; i < sums.length; i++)
{
    for (let j = 0; j < sums[i].length; j++)
    {
        sum += sums[i][j];
        count++;
        avarage = sum/count;

        if (sums[i][j] > max)
        {
            max = sums[i][j];
            min = max;
        }
        else if (min > sums[i][j])
        {
            min = sums[i][j];
        }

    }
}


console.log(`Максимальное значение ${max}, среднее арифмитическое значение ${avarage}, минимальное значение ${min}.`);

