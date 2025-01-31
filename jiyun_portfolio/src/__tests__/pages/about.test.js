import { getStaticProps } from "@/pages/about";

// Mocking fetch globally
global.fetch = jest.fn((url) =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                message: `Fetched from ${url}`,
            }),
    })
);

describe("getStaticProps()", () => {
    it("fetches API data correctly", async () => {
        // Reset mock call history before running the test
        global.fetch.mockClear();

        // Call getStaticProps
        const response = await getStaticProps();

        // Debugging: Mock 호출 여부 확인
        console.log("Fetch Calls:", global.fetch.mock.calls);

        // Verify that fetch was called the expected number of times
        expect(global.fetch).toHaveBeenCalledTimes(3);

        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining("/api/server/introductionData")
        );
        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining("/api/server/educationData")
        );
        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining("/api/server/certificationData")
        );

        expect(response).toEqual({
            props: {
                introductionData: {
                    message: "Fetched from /api/server/introductionData",
                },
                educationData: {
                    message: "Fetched from /api/server/educationData",
                },
                certificationData: {
                    message: "Fetched from /api/server/certificationData",
                },
            },
        });
    });
});
