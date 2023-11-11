import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - My React Application`;
  }, [title]);
};

export default useDocumentTitle;
