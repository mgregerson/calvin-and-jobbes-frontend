import Nav from "./Nav";
import { render, fireEvent, screen } from "@testing-library/react";
import userContext from "./userContext.js";
import { MemoryRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Homepage from "./Homepage";
import ProfileForm from "./ProfileForm";

function testHandleLogout() {
  console.log("Called testHandleLogout");
}

testHandleLogout = jest.fn();

describe("Nav component", function () {
  it("Renders without crashing", function () {
    const user = { username: "test-user" };
    render(
      <userContext.Provider value={{ user }}>
        <MemoryRouter>
          <Nav logOut={testHandleLogout} />
          <Homepage user={user} />
        </MemoryRouter>
      </userContext.Provider>
    );
  });
  it("matches snapshot", function () {
    const user = { username: "test-user" };
    const { container } = render(
      <userContext.Provider value={{ user }}>
        <MemoryRouter>
          <Nav logOut={testHandleLogout} />
          <Homepage user={user} />
        </MemoryRouter>
      </userContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it("Displays the Jobber the Hutt homepage link", function () {
    const user = { username: "test-user" };
    const { container } = render(
      <userContext.Provider value={{ user }}>
        <MemoryRouter>
          <Nav logOut={testHandleLogout} />
        </MemoryRouter>
      </userContext.Provider>
    );
    const homeLink = document.querySelector(".navbar-brand");
    expect(homeLink).toBeInTheDocument();
  });
  it("Directs the user to the homepage when you click the navbar-brand", function () {
    const user = { username: "test-user" };
    render(
      <userContext.Provider value={{ user }}>
        <MemoryRouter>
          <Nav logOut={testHandleLogout} />
          <ProfileForm handleProfileEdit={testHandleLogout} />
        </MemoryRouter>
      </userContext.Provider>
    );
    const navbarBrandLink = screen.getByText("Jobber the Hutt");
    fireEvent.click(navbarBrandLink);

    // Assert that the current URL is "/"
    expect(window.location.pathname).toBe("/");
  });
  // it("Directs the user to the conpanies route when you click Companies", function () {
  //   const user = { username: "test-user" };
  //   render(
  //     <userContext.Provider value={{ user }}>
  //       <MemoryRouter>
  //         <Nav logOut={testHandleLogout} />
  //         <ProfileForm handleProfileEdit={testHandleLogout} />
  //       </MemoryRouter>
  //     </userContext.Provider>
  //   );
  //   const companiesNavLink = screen.getByText("Companies");
  //   fireEvent.click(companiesNavLink);

  //   // // Assert that the current URL is "/companies"
  //   // expect(window.location.pathname).toBe("/companies");
  //   expect(screen.getByText("Company")).toBeInTheDocument();
  // });
});
