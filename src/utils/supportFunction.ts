interface groupByResult {
    key: string,
    values: any[]
}

export const groupBy = (arr: any[], propertyKey: string): groupByResult[] => {
    var groups = {};
    arr.forEach(function(el) {
        var key = el[propertyKey];
        if (key in groups === false) {
            groups[key] = [];
        }
        groups[key].push(el);
    });
    return Object.keys(groups).map(function(key) {
        return {
            key: key,
            values: groups[key]
        };
    });
}