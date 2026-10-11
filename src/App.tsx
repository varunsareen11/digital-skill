import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AboutPage from './pages/AboutPage';
import ApplyPage from './pages/ApplyPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CoursesPage from './pages/CoursesPage';
import FaqPage from './pages/FaqPage';
import HomePage from './pages/HomePage';
import InternshipPage from './pages/InternshipPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import RefundPolicyPage from './pages/legal/RefundPolicyPage';
import TermsPage from './pages/legal/TermsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:slug" element={<CourseDetailPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="internship" element={<InternshipPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsPage />} />
        <Route path="refund-policy" element={<RefundPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
