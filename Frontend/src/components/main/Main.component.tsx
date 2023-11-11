import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import { Example } from "../../pages/example/Example";
import { Exam } from "../../pages/exam/Exam";
import { Error } from "../../pages/error/Error";

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
