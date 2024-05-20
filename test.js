function calecuLate() {
    let total = 0;
    const laks = (e) => {
        total += e * 100000;
        return method;
    }
    const cror = (e) => {
        total += e * 10000000;
        return method;
    }
    const thou = (e) => {
        total += e * 1000;
        return method;
    }

    const hund = (e) => {
        total += e * 100;
        return method;
    }
    const value = () => {
        return total
    }

    const method = {
        laks, cror, thou, hund, value
    }
    return method

}
console.log(calecuLate().cror(1).hund(4).laks(5).value())