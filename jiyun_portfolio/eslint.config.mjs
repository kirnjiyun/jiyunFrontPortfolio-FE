import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "@typescript-eslint/no-unused-vars": "off", // 사용되지 않는 변수 무시
            "@typescript-eslint/no-explicit-any": "off", // 'any' 타입 경고 무시
            "@next/next/no-img-element": "off", // <img> 태그 경고 무시
        },
    },
];

export default eslintConfig;
