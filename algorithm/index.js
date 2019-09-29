const f = (a, b, c) => {
    const multiply = a * b * c;
    if (multiply > 0) {
        return true
    }else if (multiply < 0) {
        return false
    }else {
        throw new Error('Error');
    }
}

console.log(f(1,3,"d"));