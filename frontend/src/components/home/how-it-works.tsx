import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Search, Users, FileText } from "lucide-react";

const HowItWorks = () => {
    return (
      <section id="features" className="flex flex-col items-center justify-center w-full py-16 lg:py-24 px-2 sm:px-0">
        <Wrapper>
          <Container>
            <div className="flex flex-col lg:flex-row items-start justify-start lg:items-end lg:justify-between px-2 md:px-0">
              <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-start tracking-tight">
                Simple steps.
                <br /> Perfect matches.
              </h2>
              <p className="text-base font-normal text-muted-foreground text-left lg:text-start mt-4 lg:mt-0 max-w-md">
                Tender helps recruiters easily compare candidates for a specific
                opportunity by matching CVs to the requirements.
              </p>
            </div>
          </Container>

          <Container delay={0.1}>
            <div className="flex flex-col gap-y-8 mt-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                <div className="flex flex-col p-6 lg:p-8 h-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                      01
                    </span>
                  </div>
                  <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                    <h4 className="text-xl lg:text-2xl font-medium">
                      Define the job <br /> and requirements
                    </h4>
                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                      Create a new tender or job opportunity and describe the
                      key skills, experience, and requirements you are hiring
                      for.
                    </p>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="w-full border border-border/50 rounded-lg bg-muted/5 h-64 flex items-center justify-center">
                    <Search
                      className="w-32 h-32 text-muted-foreground/50"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                <div className="flex w-full">
                  <div className="w-full border border-border/50 rounded-lg bg-muted/5 h-64 flex items-center justify-center">
                    <Users
                      className="w-32 h-32 text-muted-foreground/50"
                      strokeWidth={1}
                    />
                  </div>
                </div>
                <div className="flex flex-col p-6 lg:p-8 h-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                      02
                    </span>
                  </div>
                  <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                    <h4 className="text-xl lg:text-2xl font-medium">
                      Upload candidate <br /> CVs for the tender
                    </h4>
                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                      Attach the CVs of the candidates you want to compare so
                      the system can evaluate them against the same criteria.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                <div className="flex flex-col p-6 lg:p-8 h-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                      03
                    </span>
                  </div>
                  <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                    <h4 className="text-xl lg:text-2xl font-medium">
                      Run AI matching <br /> and review insights
                    </h4>
                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                      Start the matching process to see ranked candidates,
                      match tiers, and key skills they have or are missing for
                      this job.
                    </p>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="w-full border border-border/50 rounded-lg bg-muted/5 h-64 flex items-center justify-center">
                    <FileText
                      className="w-32 h-32 text-muted-foreground/50"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
      </section>
    );
};

export default HowItWorks;