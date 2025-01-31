import handler from "@/pages/api/server"; // API 핸들러 불러오기

describe("API Route: /api/server", () => {
    it("should return JSON data successfully", () => {
        const mockReq = {};
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            setHeader: jest.fn(), // ✅ setHeader 추가
        };

        handler(mockReq, mockRes);

        expect(mockRes.setHeader).toHaveBeenCalledWith(
            "Access-Control-Allow-Origin",
            "*"
        );
        expect(mockRes.setHeader).toHaveBeenCalledWith(
            "Access-Control-Allow-Methods",
            "GET, POST, PUT, DELETE"
        );
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(expect.any(Object)); // JSON 객체인지 확인
    });
});
