import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Technology from "./pages/Technology";
import CaseStudies from "./pages/CaseStudies";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";
import Goodies from "./pages/Goodies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Toaster />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/career" element={<Career />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/goodies" element={<Goodies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
