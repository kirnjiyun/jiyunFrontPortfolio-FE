import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 100px;
`;

const StyledSelectButton = styled.button`
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    background: var(--color-bg);
    color: var(--color-fg);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    transition: border-color 0.15s ease, background-color 0.15s ease;

    &:hover {
        border-color: var(--color-ring);
    }

    &:focus {
        outline: none;
        border-color: var(--color-ring);
        box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
    }
`;

const DropdownList = styled(animated.ul)`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    box-shadow: var(--shadow-md);
    margin: 0;
    padding: 0.25rem;
    list-style: none;
    overflow: hidden;
    z-index: 100;
`;

const DropdownItem = styled.li`
    padding: 0.5rem 0.625rem;
    font-size: 0.875rem;
    color: var(--color-fg);
    cursor: pointer;
    border-radius: calc(var(--radius) - 4px);
    transition: background-color 0.1s ease;

    &:hover {
        background-color: var(--color-accent);
    }
`;

const DropdownIcon = styled(animated.span)`
    font-size: 0.65rem;
    display: inline-block;
    color: var(--color-muted-fg);
`;

const FilterSelect = ({ value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const dropdownAnimation = useSpring({
        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
        opacity: isOpen ? 1 : 0,
        transformOrigin: "top",
        config: { tension: 300, friction: 18 },
    });

    const iconAnimation = useSpring({
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        config: { tension: 200, friction: 20 },
    });

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <Container ref={ref}>
            <StyledSelectButton onClick={() => setIsOpen((prev) => !prev)}>
                {options.find((opt) => opt.value === value)?.label || "선택"}
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
