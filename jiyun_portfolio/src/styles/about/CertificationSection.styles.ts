import styled from "styled-components";
import { animated } from "react-spring";

const colors = {
    darkBlue: "var(--color-dark-blue)",
    mediumBlue: "var(--color-medium-blue)",
    lightestBlue: "var(--color-lightest-blue)",
    brightestBlue: "var(--color-brightest-blue)",
};

// 전체 섹션 컨테이너
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    margin: 16px 0;
    border-radius: 12px;
    background: ${colors.lightestBlue};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    min-height: 300px;
    width: 100%;

    &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
`;

// 섹션 제목
export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: ${colors.darkBlue};
    margin-bottom: 20px;
    text-align: center;
    font-family: "SBAggroB";
`;

// 카드가 여러 개 있을 경우 그리드 배치
export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
`;

/*
  ─────────────────────────────────────
  뒤집힘 효과 관련 styled-components
  ─────────────────────────────────────
*/

// 카드 최외곽 컨테이너(3D 공간 마련)
export const FlipContainer = styled.div`
    perspective: 1000px; // 3D 효과를 위해 필수
    width: 100%;
    height: 250px; // 카드 높이 (필요에 따라 조정)
    position: relative;
`;

// 실제로 회전하는 부분(react-spring의 animated.div 사용)
export const FlipInner = styled(animated.div)`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d; // 자식들이 3D로 뒤집히도록
    position: relative;
`;

// 앞면 스타일
export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; // 뒤집혔을 때 숨김
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    // 내부 레이아웃
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1.2rem;
    color: ${colors.darkBlue};

    // 제목, 설명 등
    h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
    }
`;

// 뒷면 스타일
export const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; // 뒤집혔을 때 숨김
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    // 뒷면은 180도 돌아가 있어야 함
    transform: rotateY(180deg);

    // 내부 레이아웃
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1.2rem;
    color: ${colors.darkBlue};

    // 예: 제목, 설명
    h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    // description은 dangerouslySetInnerHTML로 렌더링할 것이므로 p 대신 div 사용 가능
    .description {
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }
`;

// "자세히 보기" 등 버튼
export const DetailButton = styled.button`
    align-self: flex-end;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    background-color: ${colors.mediumBlue};
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 0.5rem;

    &:hover {
        background-color: ${colors.darkBlue};
    }
`;

// 닫기 버튼 (뒷면에서)
export const CloseButton = styled.button`
    align-self: flex-end;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    background-color: ${colors.darkBlue};
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 0.5rem;

    &:hover {
        background-color: #333;
    }
`;
