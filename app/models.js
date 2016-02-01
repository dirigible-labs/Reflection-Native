const colors = require('./component/colors');

class RecordType {
    constructor(name, symbol, colorId) {
        if (!colors.hasOwnProperty(colorId))
            throw new Error(`${colorId} is not a valid colorId.`)

        this.name = name;
        this.symbol = symbol;
        this.color_id = colorId;
        this.color = colors[colorId];
        this.color_light = colors[`${colorId}_light`];
    }
}

module.exports = {
    RecordType
};
