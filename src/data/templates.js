// One consistent shape for every template. Later phases will load this from MongoDB.
const t = (order, id, name, category, photo, layout, accent, description) => ({
  id, name, category, description, photo, layout, accent,
  available: true, order,
});

export const templates = [
  t(1, 'fresh-start', 'Fresh Start', 'fresher', true, 'two-col', '#2457F5', 'A friendly first resume with a photo and a clear sidebar.'),
  t(2, 'ats-graduate', 'ATS Graduate', 'fresher', false, 'single', '#0B1F3A', 'Plain structure that applicant tracking systems read easily.'),
  t(3, 'student-pro', 'Student Pro', 'fresher', false, 'single', '#1F6FB2', 'Puts education, projects and skills first.'),
  t(4, 'modern-columns', 'Modern Columns', 'fresher', true, 'two-col', '#0E7C86', 'Two columns with a photo for a modern look.'),
  t(5, 'creative-launch', 'Creative Launch', 'fresher', false, 'banner', '#5B3FD1', 'A bold header for creative first applications.'),
  t(6, 'classic-professional', 'Classic Professional', 'experienced', false, 'single', '#0B1F3A', 'A timeless single-column layout.'),
  t(7, 'modern-executive', 'Modern Executive', 'experienced', true, 'banner', '#16356B', 'A confident header with room for a photo.'),
  t(8, 'ats-friendly-professional', 'ATS-Friendly Professional', 'experienced', false, 'single', '#2457F5', 'Clean headings built for applicant tracking systems.'),
  t(9, 'corporate-elite', 'Corporate Elite', 'experienced', true, 'two-col', '#0B1F3A', 'A polished sidebar layout with a photo.'),
  t(10, 'minimalist-expert', 'Minimalist Expert', 'experienced', false, 'single', '#44546A', 'Generous white space and quiet typography.'),
  t(11, 'tech-professional', 'Tech Professional', 'experienced', false, 'two-col', '#2457F5', 'Skills and tools stay visible beside your experience.'),
  t(12, 'software-engineer', 'Software Engineer', 'experienced', false, 'single', '#1F6FB2', 'Projects and technical skills up front.'),
  t(13, 'two-column-expert', 'Two-Column Expert', 'experienced', true, 'two-col', '#0E7C86', 'Balanced columns with a profile photo.'),
  t(14, 'data-analytics', 'Data & Analytics', 'experienced', false, 'two-col', '#5B3FD1', 'Highlights tools, metrics and measurable results.'),
  t(15, 'engineering-specialist', 'Engineering Specialist', 'experienced', false, 'single', '#16356B', 'Structured for certifications and technical work.'),
  t(16, 'senior-executive', 'Senior Executive', 'experienced', false, 'banner', '#0B1F3A', 'Leadership summary and achievements first.'),
  t(17, 'project-leader', 'Project Leader', 'experienced', false, 'single', '#2457F5', 'Shows projects, teams and delivery outcomes.'),
  t(18, 'sales-achiever', 'Sales Achiever', 'experienced', false, 'banner', '#1F6FB2', 'Makes targets and results easy to spot.'),
  t(19, 'creative-portfolio', 'Creative Portfolio', 'experienced', true, 'banner', '#5B3FD1', 'A photo and a portfolio-style header.'),
  t(20, 'career-progression', 'Career Progression', 'experienced', false, 'single', '#0E7C86', 'Shows growth across roles over time.'),
];

export const byCategory = (c) => templates.filter((x) => x.category === c && x.available);
