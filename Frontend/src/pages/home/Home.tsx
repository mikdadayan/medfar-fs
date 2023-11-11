import React, { useEffect } from "react";

import Header from "../../components/elements/text/header";
import Paragraph from "../../components/elements/text/paragraph";
import CustomList from "../../components/elements/text/customList";
import { instructionsList, lookingForList, otherInfoList } from "./constants";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Example - My React Application";
  }, []);

  return (
    <div>
      <h1>MEDFAR Developer Interview Test</h1>

      <div className="row">
        <div className="col-lg-12">
          <Header level={2} text="Introduction" />
          <Paragraph text="This test is meant to showcase your development skills. You will work directly in this solution, and you can use any resource on the internet that you think you need, (except other people)." />
          <Header level={2} text="Instructions" />
          <CustomList items={instructionsList} />
          <Header level={2} text="What we are looking for" />
          <CustomList items={lookingForList} />
          <Header level={2} text="Other info" />
          <CustomList items={otherInfoList} />
        </div>
      </div>
    </div>
  );
};

export default Home;
