import LegalFooter from "@/components/legalFooter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MailPen, MessagesSquare, Shield } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Terms', // Display Title
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen items-center py-4 w-full">
      {/* Top Announcement Bar */}
      <span className="flex fixed top-4 z-10 items-center justify-between w-full px-4 md:px-8 lg:px-12 bg-background">
        <Link href='/'><Button className='flex gap-2'><ArrowLeft />Home</Button></Link>
        <h1 className="text-2xl font-semibold">Terms of Service</h1>
        <Link href='/legal/privacy'><Button className='flex gap-2'><Shield />Privacy</Button></Link>
      </span>
      
      
      
      
      {/* Actual Terms of Service */}
      <div className="flex flex-col pt-12 px-5 md:max-w-3xl">
        {/* Attribution */}
        <div className="flex flex-col items-center justify-center text-xs pb-6">
          <span className="flex items-center justify-between w-full">
            <p className="hidden md:flex gap-1 text-foreground/50">Drafted, managed, and legally defended by: <Link href='' className="font-bold text-primary">Du Toit Associates (WHK, Namibia)</Link></p>
            <p className="flex gap-1 md:hidden text-foreground/50">Defended by: <Link href='' className="font-bold text-primary">Du Toit Associates</Link></p>
            <p className="hidden md:flex text-accent/50 italic">Effective Date: 29 October 2026</p>
            <p className="md:hidden flex text-accent/50 italic">Effective Date: 29 Oct 2026</p>
          </span>
          <p className="text-center italic text-foreground/80 pt-2">By using this website [<Link href='' className="text-blue-600 dark:text-blue-500 hover:underline">www.imperialmedia.na</Link>] you agree to the terms laid out in this document, without any reservations. <br/> The terms in question being the following:</p>
        </div>


        {/* Section One - About Terms */}
        <section id="aboutTerms" className="mt-2">
          <h1 className="text-center text-2xl font-bold text-primary/80">1. About these Terms</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-6">1.1.</h3>
            <p className="text-sm pt-0.5 border-l-2 border-primary/50 pl-2 rounded-sm">These Terms of Service (“Terms”) govern your access to and use of the website at <Link href='' className="text-blue-600 dark:text-blue-500 hover:underline">www.imperialmedia.na</Link>, the client portal, the Imperial Media Solutions mobile application (once released), and all related services, applets and tools (together, the “Services”).</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">1.2 </h3>
            <p className="text-sm pt-0.5 border-l-2 border-primary/50 pl-2 rounded-sm">The Services are provided by Imperial Media Solutions, registration number [0000 0000 00000], whose registered address is P.O Box 240, Oshakati, Namibia. Hereby refered to as (“Imperial Media”, “we”, “us”, “our”).</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">1.3 </h3>
            <p className="text-sm pt-0.5 border-l-2 border-primary/50 pl-2 rounded-sm">By accessing the Services, creating an account, or accepting a quotation, you agree to these Terms. If you act for a company or other organisation, you confirm that you are authorised to bind it, and “you” includes that organisation.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">1.4 </h3>
            <p className="text-sm pt-0.5 border-l-2 border-primary/50 pl-2 rounded-sm">If you do not agree to these Terms, please do not use the Services.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">1.3 </h3>
            <p className="text-sm pt-0.5 border-l-2 border-primary/50 pl-2 rounded-sm">Our Privacy Policy explains how we handle personal information and forms part of these Terms.</p>
          </span>
        </section>
        
        {/* Section Two - What We Offer */}
        <section id="offers" className="mt-8">
          <h1 className="text-center text-2xl font-bold text-primary/80">2. What We Offer</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">2.1.</h3>
            <p className="text-sm pt-0.5 border-l-2 border-primary/50 pl-2 rounded-sm">We are a digital agency providing web design and development, IT services, livestreaming, graphic design and print services.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">2.2 </h3>
            <p className="text-sm pt-0.5 border-l-2 border-primary/50 pl-2 rounded-sm">The public part of the Services lets anyone learn about us, view our catalogue and contact us.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">2.3 </h3>
            <p className="text-sm pt-0.5 border-l-2 border-primary/50 pl-2 rounded-sm">The client portal is available to approved clients. Depending on your plan and the services you buy, it lets you request quotations, view and download invoices and documents, manage your subscription, manage websites we build or host for you (including adding, updating and removing content and viewing site statistics and performance), and use the applets we enable for your account.</p>
          </span>
        </section>
        
        {/* Section Three - Other Agreements */}
        <section id="otherAgreements" className="mt-8">
          <h1 className="text-center text-2xl font-bold text-primary/80">3. Other Agreements</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">3.1.</h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Project work may also be governed by a separate written agreement, such as a master services agreement, statement of work or accepted quotation.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">3.2 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">If there is a conflict, the following order applies: (a) a signed agreement between us; (b) an accepted quotation; (c) these Terms.</p>
          </span>
        </section>
        
        {/* Section Four - Using the public website */}
        <section id="publicSite" className="mt-8">
          <h1 className="text-center text-2xl font-bold text-primary/80">4. Using the public website</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">4.1.</h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">You may browse the website for lawful purposes. Information in our catalogue, including descriptions, specifications and indicative prices, is for general information and is not an offer capable of acceptance. We may change it at any time.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">4.2 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Enquiries sent through the website do not create a contract until we confirm an order or you accept a quotation as described in clause 6.</p>
          </span>
        </section>
        
        {/* Section Five - Accounts and the client Portal */}
        <section id="accounts" className="mt-8">
          <h1 className="text-center text-2xl font-bold text-primary/80">5. Accounts and the client Portal</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">5.1.</h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Portal access is by approval. We may decline or withdraw access at our discretion, acting reasonably.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">5.2 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">You must give accurate, current information when registering and keep it up to date.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">5.3 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">You are responsible for keeping your login credentials confidential and for all activity under your account. Tell us immediately at \[email\] if you suspect unauthorised access.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">5.4 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">If you allow other people to use your account or to act on your behalf, you are responsible for what they do and for ensuring they follow these Terms.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">5.5 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Some applets and administrative tools are reserved for our own team and are not available to clients. Your access is limited to the features enabled for your account.</p>
          </span>
        </section>
        
        {/* Section Six - Quotations and Orders */}
        <section id="quotations" className="mt-8">
          <h1 className="text-center text-2xl font-bold text-primary/80">6. Quotations and Orders</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">6.1.</h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">A quotation request submitted through the portal or otherwise is an invitation for us to quote, not an order.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">6.2 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">A quotation sets out the scope, fees, estimated timeline and key assumptions. Unless it says otherwise, it is valid for 14 days from the date issued.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">6.3 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">A contract is formed when you accept a quotation in writing, including electronically through the portal or by email, or when you pay a deposit or first invoice. Electronic acceptance is valid and binding to the extent recognised by the Electronic Transactions Act 4 of 2019.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">6.4 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Work outside the agreed scope is handled by a written change request. A change request may alter the price and timeline, and we need not start the extra work until you approve it.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">6.5 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Timelines depend on you supplying content, feedback, access and approvals on time. Delays on your side may move delivery dates and may lead to additional charges.</p>
          </span>
        </section>
        
        {/* Section Seven - Fees, Invoices and Payment */}
        <section id="fees" className="mt-8">
          <h1 className="text-center text-2xl font-bold text-primary/80">7. Fees, Invoices and Payment</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">7.1.</h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Timelines depend on you supplying content, feedback, access and approvals on time. Delays on your side may move delivery dates and may lead to additional charges.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">7.2 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">We issue invoices through the portal or by email. Unless an invoice or agreement says otherwise, invoices are payable within 14 days of the invoice date, in cleared funds, to the bank account shown on the invoice.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">7.3 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">We may require a deposit of 50% before work starts. Once work has started, deposits are non-refundable except where we cancel the project without cause.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">7.4 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">If you do not pay on time, we may charge interest on overdue amounts at 15% per annum, calculated daily, together with reasonable collection costs, and after written notice we may suspend the Services, withhold deliverables and, for sites we host, take the site offline until the account is settled.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">7.5 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">If you dispute an invoice, tell us in writing within 7 days of receiving it, giving reasons, and pay any undisputed part on time. We will work with you in good faith to resolve the dispute.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">7.6 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Invoices and documents in the portal are provided for your convenience. You should download and keep your own copies.</p>
          </span>
        </section>
        
        {/* Section Eight - Subscriptions and Priority Support */}
        <section id="subscriptions" className="mt-8">
          <h1 className="text-center text-2xl font-bold text-primary/80">8. Subscriptions and Priority Support</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">8.1.</h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">We offer subscription plans for companies and individuals. Features and prices are shown at sign-up or in your quotation.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">8.2 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Subscriptions renew automatically for each billing period until cancelled.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">8.3 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">You may cancel your subscriptions by giving at least 30 days’ written notice before the end of the current billing period. Cancellation takes effect at the end of that period. We do not refund fees for a period already started, unless the law requires it.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">8.4 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">We may change subscription prices or features on at least 30 days’ notice. If you do not accept the change, you may cancel your subscription before the change takes effect.</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">8.5 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">Plans that include priority support receive faster response targets as described in the plan. Targets are goals, not guarantees. Support covers matters within the scope of your plan and excludes new development, third-party faults and problems caused by changes you or others make without our involvement.</p>
          </span>
        </section>
        
        {/* Section Nine - Your Website and Content */}
        <section id="yourWebsite" className="mt-8">
          <h1 className="text-center text-2xl font-bold text-primary/80">9. Your Website and Content</h1>
          {/* Sub Section */}
          <span className="flex items-start gap-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">9.1.</h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">...</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">9.2 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">...</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">9.3 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">...</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">9.4 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">...</p>
          </span>
          {/* Sub Section */}
          <span className="flex items-start gap-2 mt-2">
            <h3 className="block text-lg text-primary font-semibold italic w-min">9.5 </h3>
            <p className="rounded-sm text-sm pt-0.5 border-l-2 border-primary/50 pl-2">...</p>
          </span>
        </section>























        
        {/* Section Two - What We Offer */}
        <section id="whatWeOffer" className="mt-6">
          <h1 className="text-2xl font-bold">1. Heading</h1>
          <h3 className="text-lg pl-2 text-primary italic">1.1. Subheading</h3>
          <p className="text-sm pl-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim voluptates molestiae magnam atque ut tempore provident, quisquam dolores adipisci, voluptatibus minima!</p>
        </section>




        {/* Contact Section */}
        {/* <section id="contact" className="mt-6">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="text-sm pl-2">If you have questions about this Notice, please contact us at <Link href='' className="text-blue-600 dark:text-blue-500 hover:underline">privacy@imperialmedia.na</Link> or write to us:</p>
          <p className="text-sm text-center">Imperial Media Solutions<br />Northern Industrial, Windhoek<br />P.O Box 240, Oshakati<br />Namibia</p>
        </section> */}
        {/* Contact Section */}
        <section id="contact" className="mt-6">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="text-sm pl-2">If you have questions about this Notice, please contact us:</p>
          <span className="flex items-center justify-between w-full">
            <span className="flex flex-col gap-2 items-center justify-center w-full">
              <span className="flex items-center gap-2 text-primary">
                <MailPen className="size-5"/>
                <h1 className="text-lg font-bold">Write to Us</h1>
              </span>
              <span>
                <p className="text-sm text-center">Imperial Media Solutions<br />Shop 14, Oshana Mall<br />P.O Box 240, Oshakati<br />Namibia</p>
              </span>
            </span>
            <span className="flex flex-col gap-2 items-center justify-center w-full">
              <span className="flex items-center gap-2 text-primary">
                <MessagesSquare className="size-5"/>
                <h1 className="text-lg font-bold">Email Us</h1>
              </span>
              <span className="flex flex-col items-center justify-center">
                <p className="text-sm text-center">Subject: <strong>&quot;ToS Complaint&quot;</strong> <br /><em className="text-primary">legal@imperialmedia.na</em></p>
                <Link href='mailto:legal@imperialmedia.na?subject=ToS%20Complaint%20-%20ImperialMediaSolutions'>
                  <Button className='flex gap-2 items-center mt-2'>
                    <Mail /> Email Us Now
                  </Button>
                </Link>
              </span>
            </span>
          </span>
          
        </section>
      </div>
      
      
      {/* Legal Page Footer */}
      <LegalFooter />
    </div>
  )
}
