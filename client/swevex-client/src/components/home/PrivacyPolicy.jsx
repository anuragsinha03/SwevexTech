import React from "react";
import Navbar from "./Navbar";
import ChatWithUs from "./ChatWithUs";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function PrivacyPolicy() {
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
              PRIVACY POLICY
            </span>
          </div>

          <div className="md:mx-10 md:my-10">
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px] "
            >
              <div className="font-bold text-[18px]">
                SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?{" "}
              </div>
              <div className="my-4">
                When you purchase something from our store, as part of the
                buying and selling process, we collect the personal information
                you give us such as your name, address and email address.
              </div>
              <div className="my-4">
                When you browse our store, we also automatically receive your
                computer’s internet protocol (IP) address in order to provide us
                with information that helps us learn about your browser and
                operating system.
              </div>
              <div className="my-4">
                Email marketing (if applicable): With your permission, we may
                send you emails about our store, new products and other updates.
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">SECTION 2 - CONSENT </div>
              <div className="my-4">How do you get my consent?</div>
              <div className="my-4">
                When you provide us with personal information to complete a
                transaction, verify your credit card, place an order, arrange
                for a delivery or return a purchase, we imply that you consent
                to our collecting it and using it for that specific reason only.
              </div>
              <div className="my-4">
                If we ask for your personal information for a secondary reason,
                like marketing, we will either ask you directly for your
                expressed consent, or provide you with an opportunity to say no.
              </div>
              <div className="my-4">How do I withdraw my consent?</div>
              <div className="my-4">
                If after you opt-in, you change your mind, you may withdraw your
                consent for us to contact you, for the continued collection, use
                or disclosure of your information, at anytime, by mailing us at:{" "}
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
                SECTION 3 - DISCLOSURE{" "}
              </div>
              <div className="my-4">
                We may disclose your personal information if we are required by
                law to do so or if you violate our Terms of Service.
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">SECTION 4 - PAYMENT </div>
              <div className="my-4">
                We use Razorpay for processing payments. We/Razorpay do not
                store your card data on their servers. The data is encrypted
                through the Payment Card Industry Data Security Standard
                (PCI-DSS) when processing payment. Your purchase transaction
                data is only used as long as is necessary to complete your
                purchase transaction. After that is complete, your purchase
                transaction information is not saved.{" "}
              </div>
              <div className="my-4">
                Our payment gateway adheres to the standards set by PCI-DSS as
                managed by the PCI Security Standards Council, which is a joint
                effort of brands like Visa, MasterCard, American Express and
                Discover.
              </div>
              <div className="my-4">
                PCI-DSS requirements help ensure the secure handling of credit
                card information by our store and its service providers.
              </div>
              <div className="my-4">
                For more insight, you may also want to read terms and conditions
                of razorpay on https://razorpay.com{" "}
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">
                SECTION 5 - THIRD-PARTY SERVICES{" "}
              </div>
              <div className="my-4">
                In general, the third-party providers used by us will only
                collect, use and disclose your information to the extent
                necessary to allow them to perform the services they provide to
                us.
              </div>
              <div className="my-4">
                However, certain third-party service providers, such as payment
                gateways and other payment transaction processors, have their
                own privacy policies in respect to the information we are
                required to provide to them for your purchase-related
                transactions.
              </div>
              <div className="my-4">
                For these providers, we recommend that you read their privacy
                policies so you can understand the manner in which your personal
                information will be handled by these providers.
              </div>
              <div className="my-4">
                In particular, remember that certain providers may be located in
                or have facilities that are located a different jurisdiction
                than either you or us. So if you elect to proceed with a
                transaction that involves the services of a third-party service
                provider, then your information may become subject to the laws
                of the jurisdiction(s) in which that service provider or its
                facilities are located.
              </div>
              <div className="my-4">
                Once you leave our store’s website or are redirected to a
                third-party website or application, you are no longer governed
                by this Privacy Policy or our website’s Terms of Service.{" "}
              </div>
              <div className="my-4">
                When you click on links on our store, they may direct you away
                from our site. We are not responsible for the privacy practices
                of other sites and encourage you to read their privacy
                statements.{" "}
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">SECTION 6 - SECURITY </div>
              <div className="my-4">
                To protect your personal information, we take reasonable
                precautions and follow industry best practices to make sure it
                is not inappropriately lost, misused, accessed, disclosed,
                altered or destroyed.
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">SECTION 7 - COOKIES </div>
              <div className="my-4">
                We use cookies to maintain session of your user. It is not used
                to personally identify you on other websites.
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">
                SECTION 8 - AGE OF CONSENT{" "}
              </div>
              <div className="my-4">
                By using this site, you represent that you are at least the age
                of majority in your state or province of residence, or that you
                are the age of majority in your state or province of residence
                and you have given us your consent to allow any of your minor
                dependents to use this site.
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="mx-4 my-4 text-[14px]"
            >
              <div className="font-bold text-[18px]">
                SECTION 9 - CHANGES TO THIS PRIVACY POLICY{" "}
              </div>
              <div className="my-4">
                We reserve the right to modify this privacy policy at any time,
                so please review it frequently. Changes and clarifications will
                take effect immediately upon their posting on the website. If we
                make material changes to this policy, we will notify you here
                that it has been updated, so that you are aware of what
                information we collect, how we use it, and under what
                circumstances, if any, we use and/or disclose it.
              </div>
              <div className="my-4">
                If our store is acquired or merged with another company, your
                information may be transferred to the new owners so that we may
                continue to sell products to you.
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
export default PrivacyPolicy;
