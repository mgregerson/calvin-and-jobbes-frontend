export default {
  getCompany: jest.fn(() =>
    Promise.resolve({
      data: {
        company: {
          handle: "test-handle",
          name: "test-name",
          description: "test-description",
          numEmployees: 20,
          logoUrl: "/logos/logo3.png",
          jobs: [
            {
              id: 1,
              title: "test-job-title",
              salary: 155000,
              equity: "0",
            },
          ],
        },
      },
    })
  ),
};
