
export default class Calc {
    add(...args) {
        return args.reduce((total, current) => total + current, 0);
    }
}