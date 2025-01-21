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
    const [ref, springs] = useInView(
        () => ({
            from: { y: 300, rotate: 0 },
            to: { y: 10, rotate: -10 },
            config: { tension: 150, friction: 20 },
        }),
        { rootMargin: "-20% 0px" } // 추가적으로 rootMargin을 설정해 스크롤 범위를 조정할 수 있습니다.
    );

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
                            width: "250px",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                </animated.div>
            </EmojiCard>
        </CardContainer>
    );
}

const hsl = (h: number) => `hsl(${h}, 100%, 50%)`; // HSL로 색상 설정

const techStacks: { src: string; hue: number; name: string }[] = [
    { src: "/images/techstack/html.png", hue: 0, name: "HTML" },
    { src: "/images/techstack/css.png", hue: 252, name: "CSS" },
    { src: "/images/techstack/javascript.png", hue: 72, name: "JavaScript" },
    { src: "/images/techstack/typescript.png", hue: 288, name: "TypeScript" },
    { src: "/images/techstack/react.png", hue: 180, name: "React" },
    { src: "/images/techstack/next.svg", hue: 324, name: "Next.js" },
    { src: "/images/techstack/styled.png", hue: 36, name: "Styled Components" },
    { src: "/images/techstack/express.svg", hue: 108, name: "Express" },
    { src: "/images/techstack/mongodb.png", hue: 144, name: "MongoDB" },
    { src: "/images/techstack/figma.png", hue: 216, name: "Figma" },
];
