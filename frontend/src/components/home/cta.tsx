import { CheckCircle2 } from "lucide-react";
import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
    return (
      <section id="cta" className="flex flex-col items-center justify-center relative w-full py-16 lg:py-20 overflow-hidden">
        <div className="absolute bottom-0 lg:bottom-0 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/3 h-1/16 blur-3xl"></div>

        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-8 gap-10 items-center">
            <div className="flex flex-col items-center lg:items-start justify-center w-full">
              <Container className="w-full">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-center lg:text-left text-transparent bg-clip-text bg-linear-to-b from-neutral-100 to-neutral-400 font-semibold">
                  Streamline Your <br className="hidden sm:inline" /> CV–Tender Matching
                </h2>
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start justify-center lg:justify-start gap-3 mt-6">
                  <div className="flex items-center gap-2 max-w-xs text-center sm:text-left">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span className="text-sm font-medium">
                      Create tenders with clear requirements
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span className="text-sm font-medium">
                      Upload CVs and get ranked matches
                    </span>
                  </div>
                </div>
              </Container>
            </div>
            <div className="flex flex-col justify-center w-full mt-8 lg:mt-0">
              <Container className="w-max mx-auto flex flex-col justify-center items-center lg:items-start">
                <div className="flex size-20">
                  <Image src="/icons/heart.svg" alt="Heart" width={1024} height={1024} className="object-cover size-full" />
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <Link href="/candidates">
                    <Button size="lg">
                      Get Started
                    </Button>
                  </Link>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">
                      Built for the <br /> Inetum Challenge 2026
                    </span>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </Wrapper>
      </section>
    );
};

export default CTA;