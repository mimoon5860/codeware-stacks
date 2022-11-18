import fetch from 'cross-fetch'
(async () => {
    // fetching all data
    const res = await fetch('https://coderbyte.com/api/challenges/json/age-counting');
    const { data } = await res.json();

    // convert data string to array and find age 30 keys
    const dataArr = data.split(', ');
    const keys: string[] = [];
    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i] === 'age=30') {
            const key: string = dataArr[i - 1].split('=')[1];
            keys.push(key);
        }
    }
    console.log(keys);
})()
