import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import { Example } from "../../pages/example/example";
import { Exam } from "../../pages/exam/exam";
import { Error } from "../../pages/error/error";

export default function Main() {
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
