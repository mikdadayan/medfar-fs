import Header from "../../components/elements/text/header";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export const Exam: React.FC = () => {
  useDocumentTitle("Exam - My React Application");

  return (
    <div>
      <Header level={2} text="Exam" />
      <div>
        <span> Here is where your work goes! </span>
      </div>
    </div>
  );
};
