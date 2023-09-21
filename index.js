export default (content) => {
    const lines = content.split('\r\n').slice(1);
    const data = lines.length;
    // console.log(lines);

    // #1
    console.log(`Count: ${data}`);


    // #2
    const citiesNames = lines.map( element => {
        const city = element.split(';')[2];
        return city;
    });
    // #2.1 
    const citiesNames1 = lines.map( el =>  el.split(';')[2]);

    console.log(`Cities: ${citiesNames1.join(', ')}`);


    // #3
    let maxSalary = 0;
    
    lines.forEach(el => {
        const salary = parseInt(el.split(';')[5]);
        if (salary > maxSalary) {
            maxSalary = salary;
        }    
    });

    // const maxSalary1 = lines.reduce(
    //     (result, el) => 
    //     parseInt(el.split(';')[5] > result ?
    //      parseInt(el.split(';')[5])
    //       : result)
    //       , 0);

    console.log(`Maximum salary: ${maxSalary}`);

    // #4
    let graduatedCount = 0;

    lines.forEach(el => {
        const graduated = el.split(';')[6];
        if(graduated.startsWith('Высшее')) {
            graduatedCount += 1;
        }
    });
    console.log(`Graduated: ${graduatedCount}`);

    // #5
    const companyType = [];

    lines.forEach(el => {
        const company = el.split(';')[0];
        const type = company.slice(0, 3);
        if (!companyType.includes(type)) {
            companyType.push(type);
        }
    });
    console.log(`Company types: ${companyType.join(', ')}`)
}