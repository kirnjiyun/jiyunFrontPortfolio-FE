export async function fetchProjects() {
    const baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5050";
    console.log(`Fetching projects from: ${baseUrl}/api/projects`);

    const res = await fetch(`${baseUrl}/api/projects`);

    if (!res.ok) {
        console.error("API 요청 실패:", res.status);
        throw new Error("프로젝트 데이터 가져오기 실패");
    }

    const data = await res.json();
    console.log("받아온 프로젝트 데이터:", data);

    return data;
}
