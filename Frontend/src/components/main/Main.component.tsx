import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Example } from "../../pages/Example";
import { Exam } from "../../pages/Exam";
import { Error } from "../../pages/Error";

export default function MainComponent() {
  return (
    <main className="container">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/example"} element={<Example />} />
        <Route path={"/exam"} element={<Exam />} />
        <Route element={<Error />} />
      </Routes>
    </main>
  );
}
