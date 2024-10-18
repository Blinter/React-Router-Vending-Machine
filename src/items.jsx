const items = [
    "Rick Roll",
    "Kool Aid",
    "Red Bull",
    "M&M's",
    "KitKat"
];

function createPathName(name) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const pathNames = items.map(createPathName);

export { items, pathNames };