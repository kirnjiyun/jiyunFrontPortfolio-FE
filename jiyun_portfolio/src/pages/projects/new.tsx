import Head from "next/head";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
    createProject,
    deleteProject,
    fetchProjects,
    updateProject,
    uploadImage,
} from "@/lib/api";
import {
    Actions,
    Card,
    DangerButton,
    FormGrid,
    Full,
    GhostButton,
    Input,
    ItemList,
    ItemRow,
    ItemTitle,
    Label,
    PageDescription,
    PageTitle,
    StatusText,
    SubmitButton,
    TextArea,
    Wrap,
} from "@/styles/admin/NewContent.styles";

const parseList = (value: string) =>
    value
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

const emptyForm = {
    category: "",
    name: "",
    title: "",
    description: "",
    duration: "",
    thumbnail: "",
    isMajor: false,
    techStack: "",
    role: "",
    features: "",
    repository: "",
    deployment: "",
    screenshots: "",
};

export default function NewProjectPage() {
    const [adminKey, setAdminKey] = useState("");
    const [status, setStatus] = useState("");
    const [projects, setProjects] = useState<any[]>([]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [uploading, setUploading] = useState(false);
    const [form, setForm] = useState(emptyForm);

    const updateField = (key: string, value: string | boolean) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const toPayload = () => ({
        category: form.category,
        name: form.name,
        title: form.title || form.name,
        description: form.description,
        duration: form.duration,
        thumbnail: form.thumbnail,
        isMajor: form.isMajor,
        techStack: parseList(form.techStack),
        role: parseList(form.role),
        features: parseList(form.features),
        screenshots: parseList(form.screenshots),
        projectLinks: {
            repository: parseList(form.repository),
            deployment: form.deployment,
        },
    });

    const loadProjects = async () => {
        try {
            const list = await fetchProjects();
            setProjects(Array.isArray(list) ? list : []);
        } catch (error: any) {
            setStatus(`목록 로드 실패: ${error.message}`);
        }
    };

    useEffect(() => {
        loadProjects();
    }, []);

    const resetForm = () => {
        setForm(emptyForm);
        setEditingId(null);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setStatus("저장 중...");

        try {
            if (editingId !== null) {
                await updateProject(editingId, toPayload(), adminKey);
                setStatus("수정 완료");
            } else {
                await createProject(toPayload(), adminKey);
                setStatus("등록 완료");
            }
            resetForm();
            await loadProjects();
        } catch (error: any) {
            setStatus(`저장 실패: ${error.message}`);
        }
    };

    const startEdit = (project: any) => {
        setEditingId(project.id);
        setForm({
            category: project.category || "",
            name: project.name || "",
            title: project.title || "",
            description: project.description || "",
            duration: project.duration || "",
            thumbnail: project.thumbnail || "",
            isMajor: Boolean(project.isMajor),
            techStack: (project.techStack || []).join("\n"),
            role: (project.role || []).join("\n"),
            features: (project.features || []).join("\n"),
            repository: (project.projectLinks?.repository || []).join("\n"),
            deployment: project.projectLinks?.deployment || "",
            screenshots: (project.screenshots || []).join("\n"),
        });
        setStatus(`편집 모드: #${project.id}`);
    };

    const removeProject = async (id: number) => {
        if (!confirm("정말 삭제하시겠습니까?")) return;
        try {
            await deleteProject(id, adminKey);
            if (editingId === id) {
                resetForm();
            }
            setStatus("삭제 완료");
            await loadProjects();
        } catch (error: any) {
            setStatus(`삭제 실패: ${error.message}`);
        }
    };

    const onThumbnailUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        setUploading(true);
        setStatus("이미지 업로드 중...");
        try {
            const uploaded = await uploadImage(file, adminKey);
            updateField("thumbnail", uploaded.url);
            setStatus("이미지 업로드 완료");
        } catch (error: any) {
            setStatus(`업로드 실패: ${error.message}`);
        } finally {
            setUploading(false);
        }
    };

    return (
        <Wrap>
            <Head>
                <title>Hidden | New Project</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <PageTitle>새 프로젝트 등록/수정 (Hidden)</PageTitle>
            <PageDescription>
                등록, 수정, 삭제를 한 페이지에서 처리할 수 있습니다.
            </PageDescription>

            <Card as="form" onSubmit={handleSubmit}>
                <FormGrid>
                    <Full>
                        <Label>
                            Admin Key
                            <Input
                                type="password"
                                value={adminKey}
                                onChange={(e) => setAdminKey(e.target.value)}
                                placeholder="서버 .env의 ADMIN_WRITE_KEY"
                                required
                            />
                        </Label>
                    </Full>
                    <Label>
                        프로젝트명(name)
                        <Input
                            value={form.name}
                            onChange={(e) => updateField("name", e.target.value)}
                            required
                        />
                    </Label>
                    <Label>
                        slug 기준 title
                        <Input
                            value={form.title}
                            onChange={(e) => updateField("title", e.target.value)}
                        />
                    </Label>
                    <Label>
                        카테고리 (개인/팀)
                        <Input
                            value={form.category}
                            onChange={(e) =>
                                updateField("category", e.target.value)
                            }
                            required
                        />
                    </Label>
                    <Label>
                        기간
                        <Input
                            value={form.duration}
                            onChange={(e) =>
                                updateField("duration", e.target.value)
                            }
                            required
                        />
                    </Label>
                    <Label>
                        대표 썸네일 URL
                        <Input
                            value={form.thumbnail}
                            onChange={(e) =>
                                updateField("thumbnail", e.target.value)
                            }
                        />
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={onThumbnailUpload}
                            disabled={uploading}
                        />
                    </Label>
                    <Label>
                        주요 프로젝트
                        <Input
                            type="checkbox"
                            checked={form.isMajor}
                            onChange={(e) =>
                                updateField("isMajor", e.target.checked)
                            }
                        />
                    </Label>
                    <Full>
                        <Label>
                            설명
                            <TextArea
                                value={form.description}
                                onChange={(e) =>
                                    updateField("description", e.target.value)
                                }
                                required
                            />
                        </Label>
                    </Full>
                    <Label>
                        기술스택 (줄바꿈 구분)
                        <TextArea
                            value={form.techStack}
                            onChange={(e) =>
                                updateField("techStack", e.target.value)
                            }
                        />
                    </Label>
                    <Label>
                        역할 (줄바꿈 구분)
                        <TextArea
                            value={form.role}
                            onChange={(e) => updateField("role", e.target.value)}
                        />
                    </Label>
                    <Label>
                        주요 기능 (줄바꿈 구분)
                        <TextArea
                            value={form.features}
                            onChange={(e) =>
                                updateField("features", e.target.value)
                            }
                        />
                    </Label>
                    <Label>
                        screenshots URL (줄바꿈 구분)
                        <TextArea
                            value={form.screenshots}
                            onChange={(e) =>
                                updateField("screenshots", e.target.value)
                            }
                        />
                    </Label>
                    <Label>
                        repository URL (줄바꿈 구분)
                        <TextArea
                            value={form.repository}
                            onChange={(e) =>
                                updateField("repository", e.target.value)
                            }
                        />
                    </Label>
                    <Label>
                        deployment URL
                        <Input
                            value={form.deployment}
                            onChange={(e) =>
                                updateField("deployment", e.target.value)
                            }
                        />
                    </Label>
                </FormGrid>
                <Actions>
                    <SubmitButton type="submit">
                        {editingId !== null ? "프로젝트 수정" : "프로젝트 등록"}
                    </SubmitButton>
                    {editingId !== null && (
                        <GhostButton type="button" onClick={resetForm}>
                            편집 취소
                        </GhostButton>
                    )}
                </Actions>
                {status && <StatusText>{status}</StatusText>}
            </Card>

            <Card>
                <PageTitle as="h2">기존 프로젝트</PageTitle>
                <ItemList>
                    {projects.map((project) => (
                        <ItemRow key={project.id}>
                            <ItemTitle>
                                #{project.id} {project.name}
                            </ItemTitle>
                            <Actions>
                                <GhostButton
                                    type="button"
                                    onClick={() => startEdit(project)}
                                >
                                    수정
                                </GhostButton>
                                <DangerButton
                                    type="button"
                                    onClick={() => removeProject(project.id)}
                                >
                                    삭제
                                </DangerButton>
                            </Actions>
                        </ItemRow>
                    ))}
                </ItemList>
            </Card>
        </Wrap>
    );
}
