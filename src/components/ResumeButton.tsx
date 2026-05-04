import { Download } from 'lucide-react';

const ResumeButton: React.FC = () => {
  const fallbackLink = "/Sagnik_Das_Resume_QA_LATEST_30April_2026.pdf";

  return (
    <a href={fallbackLink} target="_blank" rel="noopener noreferrer" className="btn-resume">
      <Download size={16} />
      Download Resume
    </a>
  );
};

export default ResumeButton;
