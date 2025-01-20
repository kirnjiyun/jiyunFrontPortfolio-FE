import React from "react";
import { useInView, animated, to } from "@react-spring/web";
import {
    Container,
    CardContainer,
    Splash,
    EmojiCard,
} from "../../styles/projects/ScrollTrigger.styles";

export default function ScrollTriggered() {
    return (
        <Container>
            {techStacks.map(({ src, hue, name }, i) => (
                <Card key={name} i={i} src={src} hue={hue} name={name} />
            ))}
        </Container>
    );
}

function Card({
    src,
    hue,
    name,
    i,
}: {
    src: string;
    hue: number;
    name: string;
    i: number;
}) {
    const [ref, springs] = useInView(() => ({
        from: { y: 300, rotate: 0 },
        to: { y: 50, rotate: -10 },
        config: { tension: 180, friction: 12 },
    }));

    // 보색 계산
    const complementaryHue1 = hue + 180;
    const complementaryHue = hue + 200;
    const background = `linear-gradient(306deg, ${hsl(
        complementaryHue1
    )}, ${hsl(complementaryHue)})`;

    return (
        <CardContainer ref={ref}>
            <Splash style={{ background }} />
            <EmojiCard>
                <animated.div
                    style={{
                        transform: to(
                            [springs.y, springs.rotate],
                            (y, r) => `translateY(${y}px) rotate(${r}deg)`
                        ),
                    }}
                >
                    <img
                        src={src}
                        alt={name}
                        style={{
                            width: "80%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                </animated.div>
            </EmojiCard>
        </CardContainer>
    );
}

const hsl = (h: number) => `hsl(${h}, 100%, 55%)`; // 강렬한 색상

const techStacks: { src: string; hue: number; name: string }[] = [
    { src: "/images/techstack/html.png", hue: 0, name: "HTML" }, // 빨강
    { src: "/images/techstack/css.png", hue: 252, name: "CSS" }, // 파랑
    { src: "/images/techstack/javascript.png", hue: 72, name: "JavaScript" }, // 노랑
    { src: "/images/techstack/typescript.png", hue: 288, name: "TypeScript" }, // 청록
    { src: "/images/techstack/react.png", hue: 180, name: "React" }, // 파랑
    { src: "/images/techstack/next.svg", hue: 324, name: "Next.js" }, // 초록
    {
        src: "/images/techstack/styled.png",
        hue: 36,
        name: "Styled Components",
    }, // 자홍
    { src: "/images/techstack/express.svg", hue: 108, name: "Express" }, // 연두
    { src: "/images/techstack/mongodb.png", hue: 144, name: "MongoDB" }, // 초록
    { src: "/images/techstack/figma.png", hue: 216, name: "Figma" }, // 자홍
];
