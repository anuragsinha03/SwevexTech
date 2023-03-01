import React from "react";
import Navbar from "./Navbar";
import ChatWithUs from "./ChatWithUs";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function RefundPolicy() {
  return (
    <div>
      <section>
        <Navbar />
        <section>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="100"
            className="flex justify-center bg-[#0894DE]  "
          >
            <span className="services-border | relative font-medium text-2xl my-6  md:my-12 text-white">
              REFUND POLICY
            </span>
          </div>

          <div className="md:mx-10 md:my-10">
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px] "
            >
              <div className="font-bold text-[18px]">RETURNS </div>
              <div className="my-4">
                Our policy lasts 30 days. If 30 days have gone by since your
                purchase, unfortunately we can’t offer you a refund or exchange.
              </div>
              <div className="my-4">
                To be eligible for a return, your item must be unused and in the
                same condition that you received it. It must also be in the
                original packaging.
              </div>
              <div className="my-4">
                Several types of goods are exempt from being returned.
                Perishable goods such as food, flowers, newspapers or magazines
                cannot be returned. We also do not accept products that are
                intimate or sanitary goods, hazardous materials, or flammable
                liquids or gases.
              </div>
              <div>
                Additional non-returnable items:
                <ul>
                  <li>▶ Gift cards</li>
                  <li>▶ Downloadable software products</li>
                  <li>▶ Some health and personal care items</li>
                </ul>
              </div>
              <div className="my-4">
                To complete your return, we require a receipt or proof of
                purchase.
              </div>
              <div className="my-4">
                Please do not send your purchase back to the manufacturer.{" "}
              </div>
              <div className="my-4">
                There are certain situations where only partial refunds are
                granted: (if applicable) Book with obvious signs of use CD, DVD,
                VHS tape, software, video game, cassette tape, or vinyl record
                that has been opened. Any item not in its original condition, is
                damaged or missing parts for reasons not due to our error. Any
                item that is returned more than 30 days after delivery
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">
                REFUNDS (if applicable){" "}
              </div>
              <div className="my-4">
                Once your return is received and inspected, we will send you an
                email to notify you that we have received your returned item. We
                will also notify you of the approval or rejection of your
                refund. If you are approved, then your refund will be processed,
                and a credit will automatically be applied to your credit card
                or original method of payment, within a certain amount of days.
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">
                LATE OR MISSING REFUNDS (if applicable){" "}
              </div>
              <div className="my-4">
                If you haven’t received a refund yet, first check your bank
                account again. Then contact your credit card company, it may
                take some time before your refund is officially posted. Next
                contact your bank. There is often some processing time before a
                refund is posted. If you’ve done all of this and you still have
                not received your refund yet, please contact us at{" "}
                <a href="mailto: director@swevextech.com">
                  - director@swevextech.com
                </a>
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">
                SALE ITEMS (if applicable)
              </div>
              <div className="my-4">
                Only regular priced items may be refunded, unfortunately sale
                items cannot be refunded.
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">
                EXCHANGES (if applicable){" "}
              </div>
              <div className="my-4">
                We only replace items if they are defective or damaged. If you
                need to exchange it for the same item, send us an email at
                <a href="mailto: director@swevextech.com">
                  - director@swevextech.com
                </a>
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">GIFTS</div>
              <div className="my-4">
                If the item was marked as a gift when purchased and shipped
                directly to you, you’ll receive a gift credit for the value of
                your return. Once the returned item is received, a gift
                certificate will be mailed to you.
              </div>
              <div className="my-4">
                If the item wasn’t marked as a gift when purchased, or the gift
                giver had the order shipped to themselves to give to you later,
                we will send a refund to the gift giver and he will find out
                about your return.
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">SHIPPING </div>
              <div className="my-4">
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are non-refundable. If
                you receive a refund, the cost of return shipping will be
                deducted from your refund.
              </div>
              <div className="my-4">
                Depending on where you live, the time it may take for your
                exchanged product to reach you, may vary.{" "}
              </div>
              <div className="my-4">
                If you are shipping an item over $75, you should consider using
                a trackable shipping service or purchasing shipping insurance.
                We don’t guarantee that we will receive your returned item.{" "}
              </div>
            </div>
          </div>
        </section>

        <ChatWithUs />
        <Footer />
      </section>
    </div>
  );
}
AOS.init();
export default RefundPolicy;
