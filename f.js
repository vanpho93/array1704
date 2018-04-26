class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;
    }

    get sign() {
        if (this.tenPhepTinh === 'CONG') return '+';
        if (this.tenPhepTinh === 'TRU') return '-';
        if (this.tenPhepTinh === 'NHAN') return '*';
        return '/';
    }

    getResultString() {
        const expression = `${this.soA} ${this.sign} ${this.soB}`;
        return `${expression} = ${eval(expression)}`;
    }
}

const pt = new PhepTinh(1, 5, 'TRU');
console.log(pt.getResultString());
