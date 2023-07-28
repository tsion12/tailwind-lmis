import React from "react";
import { Document, Page } from "react-pdf";

const LocalApplicantsSection = () => {
  const [showContent, setShowContent] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("financial");
  const [showReject, setShowReject] = React.useState(false);
  return (
    <div className="flex-grow h-full bg-gray-100">
      <div className="pt-20 w-full mt-20 flex flex-col gap-8">
        <div className="flex flex-col gap-4 w-full h-[20%]">
          <div className="flex flex-col px-32 justify-between">
            <p className="text-3xl text-[#005656] font-bold">Applications</p>
            <p className="w-[450px]">
              Application lists where the applicants submitted their documents
              to see if they are legit or not{" "}
            </p>
          </div>
          <div className="flex justify-around gap-4 cursor-pointer">
            <div className="flex justify-around gap-8 ">
              <div className="bg-white p-4 flex justify-between rounded-lg gap-16">
                <div className="text-secondary font-bold">Applications</div>
                <div>Approved</div>
                <div>Rejected</div>
              </div>
              <div className="bg-white py-4 px-8 flex justify-between rounded-lg gap-32">
                <div
                  onClick={() => setActiveTab("financial")}
                  className={`flex px-[-64] justify-center ${
                    activeTab === "financial" &&
                    "border-b-[10px] border-secondary pb-4  text-secondary"
                  } `}
                >
                  Financial
                </div>
                <div
                  onClick={() => setActiveTab("business")}
                  className={`flex px-[-64] justify-center ${
                    activeTab === "business" &&
                    "border-b-[10px] border-secondary pb-4  text-secondary"
                  } `}
                >
                  Business
                </div>
                <div
                  onClick={() => setActiveTab("foreign")}
                  className={`flex px-[-64] justify-center ${
                    activeTab === "foreign" &&
                    "border-b-[10px] border-secondary pb-4  text-secondary"
                  } `}
                >
                  Foriegn Entity
                </div>
                <div
                  onClick={() => setActiveTab("rent")}
                  className={`flex px-[-64] justify-center ${
                    activeTab === "rent" &&
                    "border-b-[10px] border-secondary pb-4  text-secondary"
                  } `}
                >
                  Rent Contract
                </div>
                <div
                  onClick={() => setActiveTab("slip")}
                  className={`flex px-[-64] justify-center ${
                    activeTab === "slip" &&
                    "border-b-[10px] border-secondary pb-4  text-secondary"
                  } `}
                >
                  Slip License
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow  h-[700px]">
          <div className=" flex px-32 gap-16 flex-grow justify-around">
            <div className="bg-white h-[300px] w-[400px] rounded-lg">
              <div className="flex flex-col justify-around p-8 gap-2 ">
                <div>
                  <p className="text-3xl">Bank Statement</p>
                </div>
                <div>
                  <p className="">
                    A bank statement is typically a digital or physical document
                    that provides a summary of the transactions, balances, and
                    activity in a bank account over a specific period of time.
                  </p>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p>Documents</p>
                  </div>
                  <div className=" ">
                    <p className="font-bold bg-[#005656] px-2 rounded-md text-white">
                      6
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p></p>
                  </div>
                  <button onClick={() => setShowContent(!showContent)}>
                    <p className="bg-[#0056569f] p-2 rounded-md text-white font-bold">
                      View Document
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              {" "}
              {showContent ? (
                <>
                  {" "}
                  <div className="bg-white h-[600px] w-[450px] rounded-lg ">
                    <Document file="https://www.africau.edu/images/default/sample.pdf">
                      <Page pageNumber={1} />
                    </Document>
                  </div>
                  <>
                    <div className="bg-white h-[600px]  w-[450px] rounded-lg">
                      <div className="bg-white h-[600px]  w-[450px] rounded-lg ">
                        <div className="flex flex-col justify-around p-4 gap-16">
                          <div className="flex justify-between">
                            <div className="flex flex-col">
                              <div>
                                <p className="text-3xl">Passport</p>
                              </div>
                              <div>
                                <p>Passport.jpg</p>
                              </div>
                            </div>

                            <div>250kb</div>
                          </div>
                          <div
                            onClick={() => setShowReject(true)}
                            className="flex flex-col justify-center items-center gap-4 cursor-pointer"
                          >
                            <div className="bg-secondary p-4 rounded-lg w-[400px]">
                              <p className="text-center text-xl p-2 rounded-md text-white font-bold">
                                Approve
                              </p>
                            </div>
                            {showReject ? (
                              <div
                                onClick={() => setShowReject(false)}
                                className="bg-white shadow-md p-4 rounded-lg w-[400px] cursor-pointer"
                              >
                                <p
                                  onClick={() => setShowReject(false)}
                                  className="text-center text-xl p-2 rounded-md  text-red-500 font-bold"
                                >
                                  Reject
                                </p>
                              </div>
                            ) : (
                              <div className="flex  gap-2  items-start flex-col">
                                <div className="flex gap-2 justify-start">
                                  <input className="w-8 h-8" type="checkbox" />
                                  <p className="font-bold text-lg">
                                    Reject this passport
                                  </p>
                                </div>
                                <textarea
                                  placeholder="please enter reason"
                                  cols={5}
                                  rows={5}
                                  className="p-4 w-[400px] border border-gray/10 rounded-md"
                                />
                                <div className="flex justify-around items-center gap-8">
                                  <button className="bg-red-200 py-4 rounded-md  text-red-500 font-bold px-16">
                                    Reject
                                  </button>
                                  <button className="bg-white py-4 rounded-md border border-primary font-bold px-16">
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </>
              ) : (
                <div className="bg-white w-[900px]">Nothing Selected</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalApplicantsSection;
