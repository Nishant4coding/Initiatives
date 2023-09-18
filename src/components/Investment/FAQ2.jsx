import React, { useState } from "react";

const FAQ2 = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-12 lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h1 className="mb-2 block text-3xl font-bold">
                Investment Portal FAQs
              </h1>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <FAQItem
              question="1. How do I create an investment account?"
              answer="To create an investment account, visit our registration page and follow the instructions to sign up. You will need to provide your personal information and agree to our terms and conditions."
            />
            <FAQItem
              question="2. What types of investments are available on the portal?"
              answer="Our investment portal offers a variety of investment options, including stocks, bonds, mutual funds, and real estate. You can explore these options and choose the ones that align with your investment goals."
            />
            <FAQItem
              question="3. Is there a minimum investment amount?"
              answer="The minimum investment amount may vary depending on the specific investment option you choose. Some investments have a low minimum requirement, while others may require a larger initial investment. Please check the details of each investment opportunity for specific requirements."
            />
            <FAQItem
              question="4. How can I track the performance of my investments?"
              answer="You can easily track the performance of your investments by logging into your investment account. Our portal provides real-time updates on your investment portfolio, including gains, losses, and overall performance."
            />
            <FAQItem
              question="5. Are my investments protected?"
              answer="We take security and investor protection seriously. Our portal follows industry-standard security measures to safeguard your investments and personal information. Additionally, some investments may come with insurance or guarantees to protect your capital."
            />
            <FAQItem
              question="6. Can I withdraw my investments at any time?"
              answer="The liquidity of your investments depends on the type of investment you choose. Some investments offer high liquidity, allowing you to withdraw your funds quickly, while others may have longer lock-in periods. Be sure to review the terms and conditions of each investment option for withdrawal details."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ2;

const FAQItem = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-orange-100 bg-opacity-30 p-4 sm:p-4 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg
            className={`duration-200 ease-in-out fill-primary stroke-primary ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{question}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">{answer}</p>
      </div>
    </div>
  );
};
