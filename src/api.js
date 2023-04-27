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

  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  // "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  // "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

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

  /** POST Register new user function */

  static async registerUser(inputData) {
    const { username, password, firstName, lastName, email } = inputData;
    try {
      let res = await this.request(
        "auth/register",
        { username, password, firstName, lastName, email },
        "post"
      );
      this.token = res.token;
      console.log(this.token, "THE TOKEN");
      return this.token;
    } catch (err) {
      return err;
    }
  }

  // Individual API routes

  // Auth

  /** POST Log in user */

  static async loginUser(inputData) {
    const { username, password } = inputData;
    try {
      let res = await this.request(
        `auth/token`,
        { username, password },
        "post"
      );
      this.token = res.token;
      console.log(this.token, "THE TOKEN");
      return this.token;
    } catch (err) {
      return err;
    }
  }

  // Users

  /** GET User by username */

  static async getUser(username, token) {
    try {
      let res = await this.request(`users/${username}`, { token });
      return res.user;
    } catch (err) {
      return err;
    }
  }

  /** PATCH Edit user */

  static async editUser(updateData) {
    try {
      let res = await this.request(
        `users/${updateData.username}`,
        updateData,
        "post"
      );
      return res.user;
    } catch (err) {
      return err;
    }
  }

  // COMPANIES

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    if (res.status >= 400) {
      throw new Error();
    }
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
