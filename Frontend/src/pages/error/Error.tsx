import Header from "../../components/elements/text/header";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export const Error: React.FC = () => {
  useDocumentTitle("Error - My React Application");

  return (
    <div>
      <Header level={1} className="text-danger" text="Error." />
      <Header
        level={2}
        className="text-danger"
        text="An error occurred while processing your request."
      />
    </div>
  );
};
