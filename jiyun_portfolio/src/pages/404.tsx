import Link from "next/link";
import { FC } from "react";
import {
    Container,
    Title,
    Description,
    HomeButton,
} from "../styles/404.styles";
const Custom404: FC = () => {
    return (
        <Container>
            <Title>404 - 페이지를 찾을 수 없습니다.</Title>
            <Description>요청하신 페이지가 존재하지 않습니다.</Description>
            <Link href="/" passHref>
                <HomeButton>홈으로 돌아가기</HomeButton>
            </Link>
        </Container>
    );
};

export default Custom404;
