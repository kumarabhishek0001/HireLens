import { useEffect } from "react";


import {
  generateInterviewReport,
  getAllInterviewReport,
  getInterviewReportById,
} from "../services/interview.api.js";

import { useInterviewContext } from "../context/inteviewContext.js";

export const useInterviewHook = () => {
  const { loading, setLoading, report, setReport, reports, setReports } =
    useInterviewContext();


  const handleGenerateReport = async ({
    selfDescription,
    jobDescription,
    title,
    company,
    resumeFile,
  }) => {
    setLoading(true);
    try {
      let resp = null;
      resp = await generateInterviewReport({
        selfDescription,
        jobDescription,
        title,
        company,
        resumeFile,
      });

      setReport(resp.reponseReport);
      return resp.reponseReport;
    } catch (error) {
      console.log("error at handleGenerateReport", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleGetReportById = async (interviewReportId) => {
    setLoading(true);
    try {
      let response = null;
      response = await getInterviewReportById(interviewReportId);
      setReport(response.interviewReport);
      return response.interviewReport;
    } catch (error) {
      console.log("error at handleGetReprot", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleGetAllInterviewReport = async () => {
    setLoading(true);
    try {
      let response = null;
      response = await getAllInterviewReport();
      setReports(response.interviewReports ?? []);
    } catch (error) {
      console.log("error at handleGetAllInterview", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAllReports = async () => {
      try {
        await handleGetAllInterviewReport();
      } catch (error) {
        console.log(error, "at interview hook useEffect");
      }
    };

    fetchAllReports()
  }, []);

  // useEffect(() => {
  //   if (reportId) {
  //     handleGetReportById(reportId);
  //   }else{
  //     handleGetAllInterviewReport()
  //   }
  // }, [reportId]);

  return {
    handleGenerateReport,
    handleGetReportById,
    handleGetAllInterviewReport,
    loading,
    report,
    reports,
  };
};
