import "@fontsource/lato";
import { Layout } from "./Layout";
import { lazy, Suspense } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { Route, Routes } from "react-router";

const DashboardPage = lazy(() => import("./Pages/Dashboard"));

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <Center>
            <Spinner />
          </Center>
        }
      >
        <Routes>
          <Route path="/" index={true} element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
