import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import { Download, Loader2 } from 'lucide-react';

const ResumeButton: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fallbackLink = "/Sagnik_Das_Resume_QA_LATEST_30April_2026.pdf";

  if (!isClient) {
    return (
      <a href={fallbackLink} target="_blank" rel="noopener noreferrer" className="btn-resume">
        <Download size={16} />
        Download Resume
      </a>
    );
  }

  return (
    <PDFDownloadLink 
      document={<ResumePDF />} 
      fileName="Sagnik_Das_Resume.pdf"
      className="btn-resume"
    >
      {({ loading, error }) => {
        if (loading) {
          return (
            <>
              <Loader2 size={16} className="animate-spin" />
              Generating...
            </>
          );
        }
        
        if (error) {
          console.error("PDF Generation Error:", error);
          return (
            <span style={{ display: 'contents' }}>
              <Download size={16} />
              Download Resume (Static)
            </span>
          );
        }

        return (
          <>
            <Download size={16} />
            Download Resume
          </>
        );
      }}
    </PDFDownloadLink>
  );
};

export default ResumeButton;
