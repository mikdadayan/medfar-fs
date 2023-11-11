import React, { useState } from "react";
import { User } from "../../shared/User";
import Header from "../../components/elements/text/header";

import { mockApiUsers } from "../../mock/userData";
import Button from "../../components/elements/button";
import Table from "../../components/elements/table/table";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export const Example: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useDocumentTitle("Example - My React Application");

  const handleLoadUsersClick = () => {
    console.log("Loading users...");
    setUsers(mockApiUsers);
  };

  // To be Updated ...
  // const handleLoadUsersClick = () => {
  //   fetch("http://localhost:3000/User").then((response) => {
  //     response.json().then((apiUsers) => {
  //       setUsers(apiUsers);
  //     });
  //   });
  // };

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
