// 유지보수 모드. 기본값은 true(켜짐)이며,
// 로컬에서 해제하려면 .env.local 에 NEXT_PUBLIC_MAINTENANCE_MODE=false 를 추가하세요.
export const MAINTENANCE_MODE =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
