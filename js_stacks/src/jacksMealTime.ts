const jacksMealTime = (time: string) => {
    const hour = time.split(':')[0];
    const mint = time.split(' ')[0].split(':')[1];
    const meridiem = time.split(' ')[1];
    const date = new Date();
    console.log(date.getHours())
    // console.log({ hour, mint, meridiem });

}

jacksMealTime('2:00 p.m.')