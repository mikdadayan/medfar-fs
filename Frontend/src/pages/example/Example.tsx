import React, { useState } from "react";
import { User } from "../../shared/User";
import Header from "../../components/elements/text/header";

import Button from "../../components/elements/button";
import Table from "../../components/elements/table/table";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import http from "../../services/httpService";
// import { mockApiUsers } from "../../mock/userData";

export const Example: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useDocumentTitle("Example - My React Application");

  // const handleLoadUsersClick = () => {
  //   console.log("Loading users...");
  //   setUsers(mockApiUsers);
  // };

  const handleLoadUsersClick = () => {
    http
      .get(`${process.env.REACT_APP_API_BASE_URL}/User`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Unexpected Error Happened");
      });
  };

  return (
    <div>
      <Header level={2} text={"Example"} />
      <div className="row">
        <div className="col-lg-12">
          <Table users={users} />
          <Button
            className="btn btn-info"
            type="button"
            id="addressSearch"
            onClick={handleLoadUsersClick}
            title={"Load Users"}
          />
        </div>
      </div>
    </div>
  );
};
