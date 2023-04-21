const { error } = require("console");
const fs = require("fs"); // ghi file
const path = require("path"); // tạo đường dẫn động

// const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            "data",
            "products.json"
        );
        fs.readFile(p, (err, flieContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(flieContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            "data",
            "products.json"
        );
        fs.readFile(p, (err, flieContent) => {
            if (err) {
                return cb([]);
            }
            cb(JSON.parse(flieContent));
        });
    }
};
