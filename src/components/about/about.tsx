import React, { FunctionComponent } from "react";
import styles from "./About.module.scss";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => (
  <div className={`${styles.cont} container`}>
    <h1 className={styles.h1}>About</h1>
    <p>
      A Self –confident, passionately curious, Lean Six Sigma Green and Black
      Belt Certified, Pharmaceutical Professional with 19 years of experience in
      Sterile Manufacturing Finished Dosage form, 18 years in Sterile Production
      as full-time employment and One year as Principal Consultant (cGMP-
      Sterile Operation). Have expertise in Sterile formulations like Dry Powder
      Injectable, Lyophilized Injectable, Liquid Injectable, BFS, Bag Line and
      three-Piece Eye Drops. Expertise covers different functional area of
      Sterile Manufacturing viz Compounding, Filling, Visual Inspection (Manual
      and Automatic), Labelling and Packing. Have great understanding of
      Qualification and Validation of Clean room area, equipment, and Process.
      For example, HVAC, Water System, all critical equipment of Production like
      Steam Sterilizer, Vial washer, Tunnel, Filling, Visual inspection both
      Manual and Automatic to name few and Process simulation.
    </p>
    <p>
      I am well versed with regulatory cGMP requirements and guidelines like 21
      CFR Part 210-211, CDER Sep 2004, EU cGMP Annex-11, WHO, PICS to name few
      and other guidelines like EN 285, SHTM 2010, PDA, Baseline ISPE, ICH,
      ISO-14644-1 to 7, USP 1211, 1116, 797,1208, 790,1790, FS 209e, KNAPP etc.
      Well versed with QMS elements.
    </p>
    <p>
      Regulatory Audit Faced:- USFDA-05, EUGMP-04, MCC, WHO 05, ANVISA - 03 and
      NHL customer audit every year
    </p>
    <h1 className={styles.h1}>Achivements</h1>
    <h4 className={styles.h4}>Achivements As Freelancer</h4>
    <ul className={styles.ul}>
      <li>
        Helped in Designing and approval of the Factory Lay out of a green field
        Sterile WFI plant coming in Derabasi, Punjab. Also helped them in
        preparation of URS and Selection of Production and Warehouse related
        equipment.
      </li>
      <li>
        Provided the online consultation for Qualification of Visual Inspector
        and Visual Inspection process on behalf of Delhi Based Pharma Consulting
        firm.
      </li>
      <li>
        Helped a Delhi based Pharma company in establishing a process for
        campaign Terminal Sterilized Product.
      </li>
      <li>
        Performed factory assessment and performed audit in line with EU
        cGMP/PICS of an Oncology- Injectable and OSD plant based in Daman and
        helped them mitigate the Problem. It was for a Delhi based Export Pharma
        Company.
      </li>
      <li>
        Performed factory assessment and performed audit in line with EU
        cGMP/PICS of an Oncology- Injectable Plant based in Hyderabad and helped
        them mitigate the Problem. It was for a Delhi based Export Pharma
        Company
      </li>
    </ul>
    <h4 className={styles.h4}>Achivements As Industry Professional</h4>
    <ul className={styles.ul}>
      <li>
        In one of my organizations in noticeably short tenure brought the
        cultural change in Shop floor activities by qualitative distribution of
        Manpower and troubleshooting the filling line equipment. Which resulted
        in sharp decline of batch run time from 30 hrs.to 08 hrs.
      </li>
      <li>
        In one of my previous Organization resolved Lyophilized product defect
        (Dried Product on stopper leg).
      </li>
      <li>
        Successfully cleared the process validation batch of Lidocaine 1%, 2ml.
        Successful clearance of this product was a chronic problem.
      </li>
      <li>
        Increased the batch size of Pantoprazole from 70 Liter to 150 Liter in
        same hold time of 16 hrs.
      </li>
      <li>
        Successfully qualified the Automatic Inspection and established a well
        proofed regulatory scrutinized procedure which resulted in transferring
        of almost all Liquid injectable from manual inspection to Automatic
        inspection.
      </li>
      <li>
        In response USFDA observation restructured the Visual Inspection SOP and
        Visual Inspector Qualification SOP which were very much in line with the
        Later Published USP chapter on visual Inspection 1790 and 790. Also
        redesigned the Visual Inspection batch document for unambiguous tracking
        of rejection in response to USFDA.
      </li>
      <li>
        Actively participated in the workshop on Visual inspection which later
        became the foundation for development of USP chapter 1790 and 790.
      </li>
      <li>
        Successfully commissioned the green field project of sterile
        formulation.
      </li>
      <li>
        Independently handled the project of water system from designing stage.
      </li>
    </ul>
  </div>
);

export default About;
