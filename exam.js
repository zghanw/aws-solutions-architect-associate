'use strict';
// Everything specific to this exam. app.js, check.js and style.css are the same file in every practice site.
{
  const guide = 'https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html';
  const link = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
  window.EXAM = {
    code: 'SAA-C03',
    name: 'AWS Certified Solutions Architect - Associate',
    key: 'saa', // localStorage prefix; index.html's theme script uses it too
    repo: 'https://github.com/zghanw/aws-solutions-architect-associate',
    guide,
    pass: 720,
    strip: 'Exam: 65 questions · 130 min · 720/1000 to pass',
    domains: {
      1: { name: 'Design Secure Architectures', weight: 30 },
      2: { name: 'Design Resilient Architectures', weight: 26 },
      3: { name: 'Design High-Performing Architectures', weight: 24 },
      4: { name: 'Design Cost-Optimized Architectures', weight: 20 },
    },
    // Real exam format: 65 questions (50 scored, 15 unscored) in 130 minutes. The mock scores all 65.
    mock: {
      count: 65, minutes: 130, title: 'Mock exam',
      note: `The format follows the ${link(guide, 'official exam guide')}. The real exam has 15 unscored questions mixed in; here all 65 count.`,
    },
    // Verified against the official SAA-C03 exam guide (version 1.1, 29 Oct 2026) and certification page, 2026-11-17.
    facts: `
      <li><b>Format:</b> 65 questions in 130 minutes, USD 150. 50 questions are scored and 15 are unscored, and you can't tell which is which.</li>
      <li>Question types: multiple choice (1 correct out of 4) and multiple response (2 or more correct out of 5 or more; you must pick all of them to get credit).</li>
      <li>Scaled score 100 to 1,000; <b>720 to pass</b>. Scoring is compensatory, so you don't need to pass each domain. There's no penalty for guessing, so answer every question.</li>
      <li>The exam tests design decisions based on the AWS Well-Architected Framework: secure, resilient, high-performing, and cost-optimized architectures.</li>
      <li>The current exam guide is version 1.1 (29 Oct 2026). Its revision notes list Amazon Elastic Transcoder as removed from the in-scope services, and it names Amazon Quick for data visualization.</li>`,
    resources: `
      <li>${link(guide, 'SAA-C03 exam guide')}, including the in-scope and out-of-scope service lists</li>
      <li>${link('https://aws.amazon.com/certification/certified-solutions-architect-associate/', 'AWS Certified Solutions Architect - Associate certification page')}</li>
      <li>${link('https://skillbuilder.aws/category/exam-prep/solutions-architect-associate-SAA-C03', 'Exam prep plan on AWS Skill Builder')}, which includes the Official Practice Question Set (sign-in required)</li>
      <li>${link('https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.html', 'AWS Well-Architected Framework')}, the basis for the exam's design questions</li>`,
  };
}
