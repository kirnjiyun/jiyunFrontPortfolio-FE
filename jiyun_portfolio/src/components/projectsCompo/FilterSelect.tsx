import styled from "styled-components";

const Select = styled.select`
    min-width: 110px;
    padding: 10px 28px 10px 0;
    color: var(--color-fg);
    background-color: var(--color-bg);
    border: 0;
    border-bottom: 1px solid var(--color-border);
    border-radius: 0;
    font: inherit;
    cursor: pointer;
    &:focus-visible { outline: 1px solid currentColor; outline-offset: 4px; }
`;
type Props = {
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
};
export default function FilterSelect({ value, options, onChange }: Props) {
    return (
        <Select aria-label="프로젝트 유형" value={value} onChange={(event) => onChange(event.target.value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </Select>
    );
}
