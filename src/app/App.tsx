import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import CalendarWidget from "@/pages/CalendarWidget/CalendarWidget";
import ContextualToolbar from "@/pages/ContextualToolbar/ContextualToolbar";
import Layout from "./Layout/Layout";
import { AnimatePresence } from "framer-motion";
import NoMatch from "@/pages/NoMatch/NoMatch";

const App: FC = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CalendarWidget />} />
          <Route path="/contextual-toolbar" element={<ContextualToolbar />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
