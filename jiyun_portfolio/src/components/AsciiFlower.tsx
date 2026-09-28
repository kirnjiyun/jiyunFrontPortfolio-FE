import styled, { keyframes } from "styled-components";

// Deterministic text artwork renders identically on the server and client.
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

const sway = keyframes`
    from { transform: rotate(-8deg) translateY(0); }
    to { transform: rotate(5deg) translateY(-10px); }
`;
const Artwork = styled.pre`
    position: absolute;
    top: 80px;
    left: 37%;
    color: var(--color-muted-fg);
    opacity: 0.3;
    font: clamp(7px, 0.85vw, 14px) / 1.05 var(--font-mono);
    white-space: pre;
    pointer-events: none;
    user-select: none;
    transform-origin: 50% 90%;
    animation: ${sway} 16s ease-in-out infinite alternate;
    @media (max-width: 700px) { top: 160px; left: 10%; font-size: 7px; opacity: 0.24; }
    @media (prefers-reduced-motion: reduce) { animation: none; }
`;
export default function AsciiFlower() {
    return <Artwork aria-hidden="true">{flower}</Artwork>;
}
