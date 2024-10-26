import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div
            className="max-w-960 pricing-head_before relative mx-auto border-l
          border-r border-s2 bg-s1/50 "
          >
            <h3
              className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 
            max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm"
            >
              Flexible pricing for teams of all sizes
            </h3>
            <div
              className="relative z-4 mx-auto flex w-[375px] rounded-3xl
            border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px]
            max-md:w-[310px]"
            >
              <button
                onclick={() => setMonthly(true)}
                className={clsx("pricing-head_btn", monthly && "text-p4")}
              >
                Monthly
              </button>
              <button
                onclick={() => setMonthly(false)}
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
              >
                Annual
              </button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Pricing;
//<Element></Element> //from react scroll so we can easily scroll to it
//usestate to be able to switch bt monthly and annual pricing
//max-w-960 pricing-head_before relative">   relative here brings out the gradient
