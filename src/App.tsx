import "@fontsource/inter/400.css"; // normal
import "@fontsource/inter/600.css"; // semibold
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import { Layout } from "./Layout";
import { lazy, Suspense } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { Logo } from "./components/common";
import { DashboardProvider } from "./providers";

const DashboardPage = lazy(() => import("./Pages/Dashboard"));

const App = () => {
  return (
    <DashboardProvider>
      <Layout>
        <Suspense
          fallback={
            <Center flexDir="column" h="80vh" gap={6}>
              <Logo />
              <Spinner color="green.400" size="xl" />
            </Center>
          }
        >
          <Routes>
            <Route path="/" index={true} element={<DashboardPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </DashboardProvider>
  );
};

export default App;
