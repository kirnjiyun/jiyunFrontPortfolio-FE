const flower = Array.from({ length: 46 }, (_, row) =>
    Array.from({ length: 86 }, (_, column) => {
        const x = (column - 43) / 29;
        const y = (row - 20) / 17;
        const angle = Math.atan2(y, x);
        const radius = Math.hypot(x, y);
        const petal = 0.64 + 0.28 * Math.cos(5 * angle - 0.7);
        const bloom = radius < petal && radius > 0.16;
        const stem = row > 25 && Math.abs(column - (43 + (row - 25) * 0.25)) < 0.8;
        const leaf = row > 31 && row < 39 && Math.abs(column - (54 - (row - 31) * 0.7)) < 4 - Math.abs(row - 35);
        if (!bloom && !stem && !leaf) return " ";
        return ".:+*#"[(column * 7 + row * 3 + Math.floor(radius * 9)) % 5];
    }).join("")
).join("\n");

export default function AsciiFlower() { return <pre className="ascii-flower" aria-hidden="true">{flower}</pre>; }
