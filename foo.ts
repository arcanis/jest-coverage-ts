class Bar {
}

exports.Foo = class Foo extends Bar {
    constructor(
        private arg: number,
    ) {
        super();
    }
}
