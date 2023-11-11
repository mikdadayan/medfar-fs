import React from "react";
import { User } from "../shared/User";

const mockApiUsers = [
  {
    id: "844e71eb-684b-466e-af4d-1a7b86d4f5b6",
    first_name: "Dick",
    last_name: "Richard",
    email: "rd@email.com",
    date_created: "1968-01-01T00:00:00.0000000",
  },
  {
    id: "59efd189-8306-41d0-a3fc-381d6fb0adfe",
    first_name: "Rocky",
    last_name: "Balboa",
    email: "rb@email.com",
    date_created: "2016-03-01T00:00:00.0000000",
  },
  {
    id: "5293847f-24b7-47f9-8ca0-596dbe1777d6",
    first_name: "Johnny",
    last_name: "Cash",
    email: "jc@email.com",
    date_created: "1989-01-01T00:00:00.0000000",
  },
  {
    id: "682131e0-bfcd-4d7f-99a8-9408a64ce825",
    first_name: "Georges",
    last_name: "Washington",
    email: "gw@email.com",
    date_created: "1796-01-01T00:00:00.0000000",
  },
  {
    id: "94c74f99-427a-43d1-a822-cf0fe25d6834",
    first_name: "Arnold",
    last_name: "Schwarzenegger",
    email: "as@email.com",
    date_created: "2016-01-01T00:00:00.0000000",
  },
  {
    id: "10caa521-18ef-425a-ba3a-d133651f6c3b",
    first_name: "Donald",
    last_name: "Trump",
    email: "dt@email.com",
    date_created: "2016-02-01T00:00:00.0000000",
  },
];

export class Example extends React.Component {
  private users: User[] = [];

  public componentDidMount() {
    document.title = "Example - My React Application";
  }

  public render(): JSX.Element {
    return (
      <div>
        <h2>Example</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="tb-container">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name </th>
                    <th>Email</th>
                    <th>Date Created</th>
                  </tr>
                </thead>
                <tbody>
                  {this.users.map((user) => (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.date_created}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              className="btn btn-info"
              type="button"
              id="addressSearch"
              onClick={() => this.loadUsers()}
            >
              Load Users
            </button>
          </div>
        </div>
      </div>
    );
  }

  //   private loadUsers(): void {
  //     fetch("http://localhost:3000/User")
  //       .then((response) => {
  //         response.json().then((apiUsers) => {
  //           this.users = apiUsers;
  //           this.forceUpdate();
  //         });
  //       })
  //       .catch((err) => (this.users = mockApiUsers));
  //   }

  private loadUsers(): void {
    console.log("Loading users...");
    this.users = mockApiUsers;
    this.forceUpdate();
  }
}
