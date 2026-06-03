export const getBaseUrl = () =>
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5050";

async function fetchJson(path: string) {
    return requestJson(path, { method: "GET" });
}

async function requestJson(
    path: string,
    {
        method,
        payload,
        adminKey,
    }: { method: string; payload?: unknown; adminKey?: string }
) {
    const headers: Record<string, string> = {};
    if (adminKey) headers["x-admin-key"] = adminKey;

    if (payload !== undefined) {
        headers["Content-Type"] = "application/json";
    }

    const res = await fetch(`${getBaseUrl()}${path}`, {
        method,
        headers,
        body: payload !== undefined ? JSON.stringify(payload) : undefined,
    });

    const data = await res
        .json()
        .catch(() => (res.status === 204 ? null : {}));

    if (!res.ok) {
        const message =
            (typeof data === "object" && data?.error) ||
            `요청 실패 (${res.status})`;
        throw new Error(message);
    }

    return data;
}

async function uploadImage(file: File, adminKey: string) {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`${getBaseUrl()}/api/uploads/image`, {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: formData,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        throw new Error(data?.error || `이미지 업로드 실패 (${res.status})`);
    }
    return data;
}

export async function fetchProjects() {
    return fetchJson("/api/projects");
}

export async function createProject(payload: unknown, adminKey: string) {
    return requestJson("/api/projects", { method: "POST", payload, adminKey });
}

export async function updateProject(
    id: number,
    payload: unknown,
    adminKey: string
) {
    return requestJson(`/api/projects/${id}`, {
        method: "PUT",
        payload,
        adminKey,
    });
}

export async function deleteProject(id: number, adminKey: string) {
    return requestJson(`/api/projects/${id}`, { method: "DELETE", adminKey });
}

export async function fetchIntroduction() {
    return fetchJson("/api/introductions");
}

export async function upsertIntroduction(payload: unknown, adminKey: string) {
    return requestJson("/api/introductions", {
        method: "PUT",
        payload,
        adminKey,
    });
}

export async function deleteIntroduction(adminKey: string) {
    return requestJson("/api/introductions", {
        method: "DELETE",
        adminKey,
    });
}

export async function fetchEducations() {
    return fetchJson("/api/educations");
}

export async function createEducation(payload: unknown, adminKey: string) {
    return requestJson("/api/educations", { method: "POST", payload, adminKey });
}

export async function updateEducation(
    id: string,
    payload: unknown,
    adminKey: string
) {
    return requestJson(`/api/educations/${id}`, {
        method: "PUT",
        payload,
        adminKey,
    });
}

export async function deleteEducation(id: string, adminKey: string) {
    return requestJson(`/api/educations/${id}`, {
        method: "DELETE",
        adminKey,
    });
}

export async function fetchCertifications() {
    return fetchJson("/api/certifications");
}

export async function createCertification(payload: unknown, adminKey: string) {
    return requestJson("/api/certifications", {
        method: "POST",
        payload,
        adminKey,
    });
}

export async function updateCertification(
    id: string,
    payload: unknown,
    adminKey: string
) {
    return requestJson(`/api/certifications/${id}`, {
        method: "PUT",
        payload,
        adminKey,
    });
}

export async function deleteCertification(id: string, adminKey: string) {
    return requestJson(`/api/certifications/${id}`, {
        method: "DELETE",
        adminKey,
    });
}

export { uploadImage };
