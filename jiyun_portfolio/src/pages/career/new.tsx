import Head from "next/head";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
    createCertification,
    createEducation,
    deleteCertification,
    deleteEducation,
    deleteIntroduction,
    fetchCertifications,
    fetchEducations,
    fetchIntroduction,
    updateCertification,
    updateEducation,
    upsertIntroduction,
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

export default function NewCareerPage() {
    const [adminKey, setAdminKey] = useState("");
    const [introStatus, setIntroStatus] = useState("");
    const [eduStatus, setEduStatus] = useState("");
    const [certStatus, setCertStatus] = useState("");
    const [educations, setEducations] = useState<any[]>([]);
    const [certifications, setCertifications] = useState<any[]>([]);
    const [editingEducationId, setEditingEducationId] = useState<string | null>(
        null
    );
    const [editingCertificationId, setEditingCertificationId] = useState<
        string | null
    >(null);

    const [intro, setIntro] = useState({
        name: "",
        email: "",
        github: "",
        description: "",
        techStack: "",
    });

    const [education, setEducation] = useState({
        school: "",
        location: "",
        major: "",
        period: "",
        programs: "",
    });

    const [certification, setCertification] = useState({
        imageSrc: "",
        alt: "",
        title: "",
        description: "",
    });

    const loadCareerData = async () => {
        try {
            const [introData, educationData, certificationData] =
                await Promise.all([
                    fetchIntroduction(),
                    fetchEducations(),
                    fetchCertifications(),
                ]);

            if (introData) {
                setIntro({
                    name: introData.name || "",
                    email: introData.email || "",
                    github: introData.github || "",
                    description: introData.description || "",
                    techStack: (introData.techStack || []).join("\n"),
                });
            }

            setEducations(Array.isArray(educationData) ? educationData : []);
            setCertifications(
                Array.isArray(certificationData) ? certificationData : []
            );
        } catch (error: any) {
            setIntroStatus(`초기 로드 실패: ${error.message}`);
        }
    };

    useEffect(() => {
        loadCareerData();
    }, []);

    const submitIntro = async (event: FormEvent) => {
        event.preventDefault();
        setIntroStatus("저장 중...");

        try {
            await upsertIntroduction(
                {
                    ...intro,
                    techStack: parseList(intro.techStack),
                },
                adminKey
            );
            setIntroStatus("Introduction 저장 완료");
            await loadCareerData();
        } catch (error: any) {
            setIntroStatus(`저장 실패: ${error.message}`);
        }
    };

    const submitEducation = async (event: FormEvent) => {
        event.preventDefault();
        setEduStatus("저장 중...");

        try {
            const payload = {
                ...education,
                programs: parseList(education.programs),
            };
            if (editingEducationId) {
                await updateEducation(editingEducationId, payload, adminKey);
                setEduStatus("Education 수정 완료");
            } else {
                await createEducation(payload, adminKey);
                setEduStatus("Education 저장 완료");
            }
            setEducation({
                school: "",
                location: "",
                major: "",
                period: "",
                programs: "",
            });
            setEditingEducationId(null);
            await loadCareerData();
        } catch (error: any) {
            setEduStatus(`저장 실패: ${error.message}`);
        }
    };

    const submitCertification = async (event: FormEvent) => {
        event.preventDefault();
        setCertStatus("저장 중...");

        try {
            if (editingCertificationId) {
                await updateCertification(
                    editingCertificationId,
                    certification,
                    adminKey
                );
                setCertStatus("Certification 수정 완료");
            } else {
                await createCertification(certification, adminKey);
                setCertStatus("Certification 저장 완료");
            }
            setCertification({
                imageSrc: "",
                alt: "",
                title: "",
                description: "",
            });
            setEditingCertificationId(null);
            await loadCareerData();
        } catch (error: any) {
            setCertStatus(`저장 실패: ${error.message}`);
        }
    };

    const removeIntro = async () => {
        if (!confirm("Introduction 데이터를 삭제할까요?")) return;
        try {
            await deleteIntroduction(adminKey);
            setIntroStatus("Introduction 삭제 완료");
            await loadCareerData();
        } catch (error: any) {
            setIntroStatus(`삭제 실패: ${error.message}`);
        }
    };

    const startEditEducation = (item: any) => {
        setEditingEducationId(item._id);
        setEducation({
            school: item.school || "",
            location: item.location || "",
            major: item.major || "",
            period: item.period || "",
            programs: (item.programs || []).join("\n"),
        });
    };

    const removeEducationItem = async (id: string) => {
        if (!confirm("Education 항목을 삭제할까요?")) return;
        try {
            await deleteEducation(id, adminKey);
            setEduStatus("Education 삭제 완료");
            await loadCareerData();
        } catch (error: any) {
            setEduStatus(`삭제 실패: ${error.message}`);
        }
    };

    const startEditCertification = (item: any) => {
        setEditingCertificationId(item._id);
        setCertification({
            imageSrc: item.imageSrc || "",
            alt: item.alt || "",
            title: item.title || "",
            description: item.description || "",
        });
    };

    const removeCertificationItem = async (id: string) => {
        if (!confirm("Certification 항목을 삭제할까요?")) return;
        try {
            await deleteCertification(id, adminKey);
            setCertStatus("Certification 삭제 완료");
            await loadCareerData();
        } catch (error: any) {
            setCertStatus(`삭제 실패: ${error.message}`);
        }
    };

    const onCertificationUpload = async (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;
        setCertStatus("이미지 업로드 중...");
        try {
            const uploaded = await uploadImage(file, adminKey);
            setCertification((prev) => ({ ...prev, imageSrc: uploaded.url }));
            setCertStatus("이미지 업로드 완료");
        } catch (error: any) {
            setCertStatus(`업로드 실패: ${error.message}`);
        }
    };

    return (
        <Wrap>
            <Head>
                <title>Hidden | New Career</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <PageTitle>경력/소개 등록 (Hidden)</PageTitle>
            <PageDescription>
                MongoDB 직접 수정 대신 이 폼으로 Introduction/Education/Certification
                데이터를 등록할 수 있습니다.
            </PageDescription>

            <Card>
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
            </Card>

            <Card as="form" onSubmit={submitIntro}>
                <PageTitle as="h2">Introduction</PageTitle>
                <FormGrid>
                    <Label>
                        이름
                        <Input
                            value={intro.name}
                            onChange={(e) =>
                                setIntro((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                            required
                        />
                    </Label>
                    <Label>
                        이메일
                        <Input
                            value={intro.email}
                            onChange={(e) =>
                                setIntro((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                            required
                        />
                    </Label>
                    <Label>
                        Github URL
                        <Input
                            value={intro.github}
                            onChange={(e) =>
                                setIntro((prev) => ({
                                    ...prev,
                                    github: e.target.value,
                                }))
                            }
                            required
                        />
                    </Label>
                    <Label>
                        기술 스택 (줄바꿈 구분)
                        <TextArea
                            value={intro.techStack}
                            onChange={(e) =>
                                setIntro((prev) => ({
                                    ...prev,
                                    techStack: e.target.value,
                                }))
                            }
                        />
                    </Label>
                    <Full>
                        <Label>
                            소개 문구
                            <TextArea
                                value={intro.description}
                                onChange={(e) =>
                                    setIntro((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }))
                                }
                                required
                            />
                        </Label>
                    </Full>
                </FormGrid>
                <Actions>
                    <SubmitButton type="submit">Introduction 저장</SubmitButton>
                    <DangerButton type="button" onClick={removeIntro}>
                        Introduction 삭제
                    </DangerButton>
                </Actions>
                {introStatus && <StatusText>{introStatus}</StatusText>}
            </Card>

            <Card as="form" onSubmit={submitEducation}>
                <PageTitle as="h2">Education</PageTitle>
                <FormGrid>
                    <Label>
                        학교
                        <Input
                            value={education.school}
                            onChange={(e) =>
                                setEducation((prev) => ({
                                    ...prev,
                                    school: e.target.value,
                                }))
                            }
                            required
                        />
                    </Label>
                    <Label>
                        위치
                        <Input
                            value={education.location}
                            onChange={(e) =>
                                setEducation((prev) => ({
                                    ...prev,
                                    location: e.target.value,
                                }))
                            }
                            required
                        />
                    </Label>
                    <Label>
                        전공
                        <Input
                            value={education.major}
                            onChange={(e) =>
                                setEducation((prev) => ({
                                    ...prev,
                                    major: e.target.value,
                                }))
                            }
                        />
                    </Label>
                    <Label>
                        기간
                        <Input
                            value={education.period}
                            onChange={(e) =>
                                setEducation((prev) => ({
                                    ...prev,
                                    period: e.target.value,
                                }))
                            }
                            required
                        />
                    </Label>
                    <Full>
                        <Label>
                            프로그램(줄바꿈 구분)
                            <TextArea
                                value={education.programs}
                                onChange={(e) =>
                                    setEducation((prev) => ({
                                        ...prev,
                                        programs: e.target.value,
                                    }))
                                }
                            />
                        </Label>
                    </Full>
                </FormGrid>
                <Actions>
                    <SubmitButton type="submit">
                        {editingEducationId
                            ? "Education 수정"
                            : "Education 저장"}
                    </SubmitButton>
                    {editingEducationId && (
                        <GhostButton
                            type="button"
                            onClick={() => {
                                setEditingEducationId(null);
                                setEducation({
                                    school: "",
                                    location: "",
                                    major: "",
                                    period: "",
                                    programs: "",
                                });
                            }}
                        >
                            편집 취소
                        </GhostButton>
                    )}
                </Actions>
                {eduStatus && <StatusText>{eduStatus}</StatusText>}
                <ItemList>
                    {educations.map((item) => (
                        <ItemRow key={item._id}>
                            <ItemTitle>
                                {item.school} ({item.period})
                            </ItemTitle>
                            <Actions>
                                <GhostButton
                                    type="button"
                                    onClick={() => startEditEducation(item)}
                                >
                                    수정
                                </GhostButton>
                                <DangerButton
                                    type="button"
                                    onClick={() =>
                                        removeEducationItem(item._id)
                                    }
                                >
                                    삭제
                                </DangerButton>
                            </Actions>
                        </ItemRow>
                    ))}
                </ItemList>
            </Card>

            <Card as="form" onSubmit={submitCertification}>
                <PageTitle as="h2">Certification</PageTitle>
                <FormGrid>
                    <Label>
                        타이틀
                        <Input
                            value={certification.title}
                            onChange={(e) =>
                                setCertification((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                }))
                            }
                            required
                        />
                    </Label>
                    <Label>
                        이미지 alt
                        <Input
                            value={certification.alt}
                            onChange={(e) =>
                                setCertification((prev) => ({
                                    ...prev,
                                    alt: e.target.value,
                                }))
                            }
                            required
                        />
                    </Label>
                    <Full>
                        <Label>
                            이미지 URL
                            <Input
                                value={certification.imageSrc}
                                onChange={(e) =>
                                    setCertification((prev) => ({
                                        ...prev,
                                        imageSrc: e.target.value,
                                    }))
                                }
                                required
                            />
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={onCertificationUpload}
                            />
                        </Label>
                    </Full>
                    <Full>
                        <Label>
                            설명
                            <TextArea
                                value={certification.description}
                                onChange={(e) =>
                                    setCertification((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }))
                                }
                                required
                            />
                        </Label>
                    </Full>
                </FormGrid>
                <Actions>
                    <SubmitButton type="submit">
                        {editingCertificationId
                            ? "Certification 수정"
                            : "Certification 저장"}
                    </SubmitButton>
                    {editingCertificationId && (
                        <GhostButton
                            type="button"
                            onClick={() => {
                                setEditingCertificationId(null);
                                setCertification({
                                    imageSrc: "",
                                    alt: "",
                                    title: "",
                                    description: "",
                                });
                            }}
                        >
                            편집 취소
                        </GhostButton>
                    )}
                </Actions>
                {certStatus && <StatusText>{certStatus}</StatusText>}
                <ItemList>
                    {certifications.map((item) => (
                        <ItemRow key={item._id}>
                            <ItemTitle>{item.title}</ItemTitle>
                            <Actions>
                                <GhostButton
                                    type="button"
                                    onClick={() =>
                                        startEditCertification(item)
                                    }
                                >
                                    수정
                                </GhostButton>
                                <DangerButton
                                    type="button"
                                    onClick={() =>
                                        removeCertificationItem(item._id)
                                    }
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
