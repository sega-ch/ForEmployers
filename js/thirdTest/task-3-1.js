const arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20]];

function sumOfArr()
{
    let sums = [];
    let sum = 0;

    arrOfArr.forEach(element => {
       for ( let i = 0; i < element.length; i++) {
        sum += element[i];
       }
       sums.push(sum);
    });

    findMax(sums);
}

function findMax(array)
{
    let max = 0;

    for (let i = 0; i < array.length; i++)
    {
        if (max < array[i])
        {
            max = array[i];
        }
    }

    alert(max);
}

sumOfArr();
