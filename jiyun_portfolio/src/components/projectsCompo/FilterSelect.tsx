import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
    position: relative;
    width: 100px;
    margin: 20px auto;
`;

const StyledSelectButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid var(--color-light-blue);
    border-radius: 8px;
    background: var(--color-lightest-blue);
    color: var(--color-dark-blue);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background: var(--color-light-blue);
        border-color: var(--color-brightest-blue);
    }
`;

const DropdownList = styled(animated.ul)`
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    background: var(--color-lightest-blue);
    border: 1px solid var(--color-light-blue);
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
`;

const DropdownItem = styled.li`
    padding: 12px 16px;
    font-size: 16px;
    color: var(--color-dark-blue);
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        background-color: var(--color-light-blue);
        color: var(--color-brightest-blue);
    }

    &:active {
        background-color: var(--color-medium-blue);
        color: var(--color-lightest-blue);
    }
`;

const DropdownIcon = styled(animated.span)`
    font-size: 18px;
    display: inline-block;
`;

const FilterSelect = ({ value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownAnimation = useSpring({
        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
        opacity: isOpen ? 1 : 0,
        transformOrigin: "top",
        config: { tension: 300, friction: 12 },
    });

    const iconAnimation = useSpring({
        transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
        config: { tension: 300, friction: 15 },
    });

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <Container>
            <StyledSelectButton onClick={() => setIsOpen((prev) => !prev)}>
                {options.find((opt) => opt.value === value)?.label ||
                    "Select an option"}
                <DropdownIcon style={iconAnimation}>▼</DropdownIcon>
            </StyledSelectButton>
            {isOpen && (
                <DropdownList style={dropdownAnimation}>
                    {options.map((option) => (
                        <DropdownItem
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </Container>
    );
};

export default FilterSelect;
