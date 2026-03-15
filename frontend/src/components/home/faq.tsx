import React from "react";
import Image from "next/image";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
    {
        question: "What problem does our platform solve?",
        answer: "Our platform helps recruiters fairly compare candidates for a specific job or tender by matching uploaded CVs against clearly defined requirements.",
    },
    {
        question: "How does the CV matching work?",
        answer: "Our AI analyzes the text of each uploaded CV and scores it against the requirements you provide, surfacing the best matches and highlighting strengths and gaps.",
    },
    {
        question: "Do you automatically detect tenders from external platforms?",
        answer: "No. For now you create the tender (job opportunity) yourself inside the app and paste in the requirements you want to match CVs against.",
    },
    {
        question: "Who is it designed for?",
        answer: "It is designed for recruiters and teams who need to evaluate several candidates for the same role or opportunity and want a faster, more consistent way to compare them.",
    },
    {
        question: "What makes our solution different?",
        answer: "Instead of trying to automate every part of tendering, Our platform focuses on doing one thing very well, which is matching the CVs you upload to the requirements you define, with clear, explainable scores and suggestions.",
    }
];

const Faq = () => {
    return (
      <section id="faq" className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden px-4 sm:px-0">
        <div className="absolute top-0 -right-1/3 -z-10 ml-auto w-4/5 h-32 lg:h-48 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(18,139,135,0.7)_0%,rgba(5,5,5,0)_80%)]"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_70%_at_90%_0%,#000_20%,transparent_70%)] h-full -z-10" />

        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-6">
            <Container>
              <div className="flex flex-col">
                <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center lg:items-start lg:justify-start">
                  <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-start tracking-tight">
                    Frequently asked questions
                  </h2>
                  <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-start mt-2 max-w-md">
                    Here you will find the answers to the most commonly asked questions & answers.
                  </p>
                </div>
                <div className="mt-10">
                  <Accordion type="single" collapsible className="w-full">
                    {FAQS.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-base font-base font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </Container>

            <Container>
              <div className="col-span-1 w-full z-10">
                <div className="flex w-full">
                  <Image src="/images/faq.svg" alt="Box" width={1024} height={1024} className="w-full" />
                </div>
              </div>
            </Container>
          </div>
        </Wrapper>
      </section>
    );
};

export default Faq
