import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Footer from './Footer.jsx'; // Reuse the Footer component
import './Policy.css'; // Use Policy.css for styles

function Policy() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="policy-page">
      <button className="return-button" onClick={() => navigate('/csu-ist621-waste-wise/')} title="Go Back">← Home Page</button>
      <header className="header">
        <h1>PRIVACY POLICY</h1>
        <p><strong>Last updated:</strong> April 01, 2025</p>
      </header>
      <main className="policy-content">
        <p>
          This Privacy Notice for <strong>Cleveland State University</strong> ("<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:
        </p>
        <ul>
          <li>Visit our website at <a href="https://revoloero.github.io/csu-ist621-waste-wise/" target="_blank" rel="noopener noreferrer">https://revoloero.github.io/csu-ist621-waste-wise/</a>, or any website of ours that links to this Privacy Notice.</li>
          <li>Use <strong>WATSEWISE</strong>, a food waste reduction solution powered by AI and blockchain.</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events.</li>
        </ul>
        <p>
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <strong>v.mai16@vikes.csuohio.edu</strong>.
        </p>
        <h2>SUMMARY OF KEY POINTS</h2>
        <p>
          This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
        </p>
        <ul>
          <li>
            <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#part1">"WHAT INFORMATION DO WE COLLECT?"</a>.
          </li>
          <li>
            <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about <a href="#sensitiveinfo">sensitive information we process</a>.
          </li>
          <li>
            <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
          </li>
          <li>
            <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. Learn more about <a href="#part2">"HOW DO WE PROCESS YOUR INFORMATION?"</a>.
          </li>
          <li>
            <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a href="#part3">"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</a>.
          </li>
          <li>
            <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#infosafe">how we keep your information safe</a>.
          </li>
          <li>
            <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#privacyrights">your privacy rights</a>.
          </li>
          <li>
            <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
          </li>
          <li>
            <strong>Want to learn more about what we do with any information we collect?</strong> <a href="#toc">Review the Privacy Notice in full</a>.
          </li>
        </ul>
        <h2 id='toc'>TABLE OF CONTENTS</h2>
        <ul>
          <li><a href="#part1">1. WHAT INFORMATION DO WE COLLECT?</a></li>
          <li><a href="#part2">2. HOW DO WE PROCESS YOUR INFORMATION?</a></li>
          <li><a href="#part3">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
          <li><a href="#part4">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
          <li><a href="#part5">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</a></li>
          <li><a href="#part6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
          <li><a href="#part7">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
          <li><a href="#part8">8. DO WE COLLECT INFORMATION FROM MINORS?</a></li>
          <li><a href="#part9">9. WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
          <li><a href="#part10">10. CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
          <li><a href="#part11">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
          <li><a href="#part12">12. DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
          <li><a href="#part13">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
          <li><a href="#part14">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
        </ul>
        <h2 id="part1">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3>Personal information you disclose to us</h3>
        <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        <p>
          <strong>Personal Information Provided by You:</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
        </p>
        <ul>
          <li>names</li>
          <li>phone numbers</li>
          <li>email addresses</li>
          <li>usernames</li>
          <li>passwords</li>
          <li>contact preferences</li>
          <li>billing addresses</li>
        </ul>
        <p>
          <strong>Sensitive Information:</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
        </p>
        <ul>
          <li>social security numbers or other government identifiers</li>
          <li>student data</li>
        </ul>
        <p>
          All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
        </p>
        <h3>Information automatically collected</h3>
        <p><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
        <p>
          We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
        </p>
        <p>
          Like many businesses, we also collect information through cookies and similar technologies.
        </p>
        <p><strong>The information we collect includes:</strong></p>
        <ul>
          <li>
            <strong>Log and Usage Data:</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
          </li>
          <li>
            <strong>Location Data:</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
          </li>
        </ul>
        <h3>Google API</h3>
        <p>
          Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" rel="noopener noreferrer">Limited Use requirements.</a>
        </p>
        <h2 id="part2">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
        <p>
          We process your personal information for a variety of reasons, depending on how you interact with our Services, including: <a href="#part2">"HOW DO WE PROCESS YOUR INFORMATION?"</a>
        </p>
        <ul>
          <li>
            <strong>To facilitate account creation and authentication and otherwise manage user accounts:</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.
          </li>
          <li>
            <strong>To enable user-to-user communications:</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.
          </li>
          <li>
            <strong>To request feedback:</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
          </li>
          <li>
            <strong>To evaluate and improve our Services, products, marketing, and your experience:</strong> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
          </li>
          <li>
            <strong>To identify usage trends:</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
          </li>
          <li>
            <strong>To comply with our legal obligations:</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
          </li>
        </ul>
        <h2 id="part3">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
        <p>
          We may need to share your personal information in the following situations:
        </p>
        <ul>
          <li>
            <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
          </li>
          <li>
            <strong>When we use Google Maps Platform APIs:</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise. We obtain and store on your device ("cache") your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.
          </li>
          <li>
            <strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
          </li>
          <li>
            <strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
          </li>
        </ul>
        <h2 id="part4">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
        <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
        </p>
        <p>
          We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
        </p>
        <p>
          To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section <a href="#part11">"DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"</a>
        </p>
        <p>
          Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
        </p>
        <h2 id="part5">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
        <p><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
        <p>
          As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
        </p>
        <h3>Our AI Products</h3>
        <p>Our AI Products are designed for the following functions:</p>
        <ul>
          <li>AI development</li>
          <li>AI predictive analytics</li>
          <li>Blockchain</li>
        </ul>
        <h3>How We Process Your Data Using AI</h3>
        <p>
          All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.
        </p>
        <p>
          Learn more about how we process your personal information in the section, <a href="#part2">"HOW DO WE PROCESS YOUR INFORMATION?"</a>
        </p>
        <h3>How to Opt Out</h3>
        <p>
          We believe in giving you the power to decide how your data is used. To opt out, you can:
        </p>
        <ul>
          <li>Log in to your account settings and update your user account</li>
          <li>Contact us using the contact information provided</li>
        </ul>
        <h2 id="part6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than __________ months past the termination of the user's account.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
        </p>
        <h2 id="part7">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>
        <p>
          We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
        </p>
        <p>
          Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
        </p>
        <h2 id="part8">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>
        <p>
          We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <strong>v.mai16@cikes.csuohio.edu</strong>.
        </p>
        <h2 id="part9">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
        <h3>Withdrawing your consent</h3>
        <p>
          If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <a href="#part13">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below.
        </p>
        <p>
          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
        </p>
        <h3>Opting out of marketing and promotional communications</h3>
        <p>
          You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section <a href="#part13">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
        </p>
        <p>
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.
        </p>
        <h3>Account Information</h3>
        <p>
          If you would at any time like to review or change the information in your account or terminate your account, you can:
        </p>
        <ul>
          <li>Log in to your account settings and update your user account.</li>
          <li>Contact us using the contact information provided.</li>
        </ul>
        <p>
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
        </p>
        <h3>Cookies and similar technologies</h3>
        <p>
          Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
        </p>
        <p>
          If you have questions or comments about your privacy rights, you may email us at <strong>v.mai16@vikes.csuohio.edu</strong>.
        </p>
        <h2 id="part10">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p><strong>In Short:</strong> Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.</p>
        <p>
          At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
        </p>
        <p>
          California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
        </p>
        <h2 id="part11">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p><strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>
        <h3>Categories of Personal Information We Collect</h3>
        <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Examples</th>
              <th>Collected</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A. Identifiers</td>
              <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>B. Personal information as defined in the California Customer Records statute</td>
              <td>Name, contact information, education, employment, employment history, and financial information</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>C. Protected classification characteristics under state or federal law</td>
              <td>Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>D. Commercial information</td>
              <td>Transaction information, purchase history, financial details, and payment information</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>E. Biometric information</td>
              <td>Fingerprints and voiceprints</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>F. Internet or other similar network activity</td>
              <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>G. Geolocation data</td>
              <td>Device location</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>H. Audio, electronic, sensory, or similar information</td>
              <td>Images and audio, video or call recordings created in connection with our business activities</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>I. Professional or employment-related information</td>
              <td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>J. Education Information</td>
              <td>Student records and directory information</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>K. Inferences drawn from collected personal information</td>
              <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>L. Sensitive personal Information</td>
              <td></td>
              <td>NO</td>
            </tr>
          </tbody>
        </table>
        <p>
          We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
        </p>
        <ul>
          <li>Receiving help through our customer support channels;</li>
          <li>Participation in customer surveys or contests; and</li>
          <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
        </ul>
        <p>
          We will use and retain the collected personal information as needed to provide the Services or for:
        </p>
        <ul>
          <li><strong>Category G</strong> - As long as the user has an account with us</li>
          <li><strong>Category H</strong> - As long as the user has an account with us</li>
        </ul>
        <h3>Sources of Personal Information</h3>
        <p>
          Learn more about the sources of personal information we collect in <a href="#part1">"WHAT INFORMATION DO WE COLLECT?"</a>
        </p>
        <h3>How We Use and Share Personal Information</h3>
        <p>
          Your personal information may be used in profiling and automated processes that could produce legal or similarly significant effects for you. Learn more about how we use your personal information in the section, <a href="#part1">"WHAT INFORMATION DO WE COLLECT?"</a>
        </p>
        <p>
          <strong>Will your information be shared with anyone else?</strong> We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, <a href="#part3">"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</a>
        </p>
        <p>
          We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
        </p>
        <p>
          We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
        </p>
        <h3>Your Rights</h3>
        <p>
          You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
        </p>
        <ul>
          <li>Right to know whether or not we are processing your personal data</li>
          <li>Right to access your personal data</li>
          <li>Right to correct inaccuracies in your personal data</li>
          <li>Right to request the deletion of your personal data</li>
          <li>Right to obtain a copy of the personal data you previously shared with us</li>
          <li>Right to non-discrimination for exercising your rights</li>
          <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
        </ul>
        <p>
          Depending upon the state where you live, you may also have the following rights:
        </p>
        <ul>
          <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
          <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
          <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
          <li>Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Minnesota)</li>
          <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
          <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
        </ul>
        <h3>How to Exercise Your Rights</h3>
        <p>
          To exercise these rights, you can contact us by submitting a <a href="https://app.termly.io/notify/cb433c77-5cb6-4898-aa23-f08d642a8732" target="_blank" rel="noopener noreferrer">data subject access request</a>, by emailing us at <strong>vuongquyenmai@gmail.com</strong>, or by referring to the contact details at the bottom of this document.
        </p>
        <p>
          Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
        </p>
        <h3>Request Verification</h3>
        <p>
          Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request.
        </p>
        <p>
          However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
        </p>
        <p>
          If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
        </p>
        <h3>Appeals</h3>
        <p>
          Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <strong>v.mai16@vikes.csuohio.edu</strong>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
        </p>
        <h3>California "Shine The Light" Law</h3>
        <p>
          California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section <a href="#part13">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a>
        </p>
        <h2 id="part12">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
        <p>
          We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date, and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
        </p>
        <h2 id="part13">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>
          If you have questions or comments about this notice, you may email us at <strong>v.mai16@vikes.csuohio.edu</strong> or by post to:
        </p>
        <p>
          Cleveland State University<br />
          2121 Euclid Avenue<br />
          Cleveland, OH 44115<br />
          United States
        </p>
        <h2 id="part14">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>
          Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <a href="https://app.termly.io/notify/cb433c77-5cb6-4898-aa23-f08d642a8732" target="_blank" rel="noopener noreferrer">data subject access request</a>.
        </p>
      </main>
      <Footer />
      <a href="#toc" className="floating-button" title="Back to Table of Contents">^</a>
    </div>
  );
}

export default Policy;
