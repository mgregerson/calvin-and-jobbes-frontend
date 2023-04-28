import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method, this.token);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // Auth

  /** POST Register new user function */

  static async registerUser(inputData) {
    const { username, password, firstName, lastName, email } = inputData;

    let res = await this.request(
      "auth/register",
      { username, password, firstName, lastName, email },
      "post"
    );

    this.token = res.token;
    return this.token;
  }

  /** POST Log in user. Returns user token and sets token in class. */

  static async loginUser(inputData) {
    const { username, password } = inputData;
    let res = await this.request(`auth/token`, { username, password }, "post");
    this.token = res.token;
    return this.token;
  }

  // Users

  /** GET User by username */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** PATCH Edit user */

  static async editUser(username, updateData) {
    let res = await this.request(
      `users/${username}`,
      updateData,
      "patch"
    );
    return res.user;
  }

  // COMPANIES

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies */

  static async getCompanies() {
    let res = await this.request("companies");
    return res.companies;
  }

  /** Search for company by title */

  static async searchCompaniesByHandle(term) {
    let res = await this.request(`companies?nameLike=${term}`);
    return res.companies;
  }

  // JOBS

  /** Get job details by id */
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** Get all jobs */
  static async getJobs() {
    let res = await this.request("jobs");
    return res.jobs;
  }

  /** Search for jobs by title */

  static async searchJobsByTitle(title) {
    let res = await this.request(`jobs?title=${title}`);
    return res.jobs;
  }
}

export default JoblyApi;
