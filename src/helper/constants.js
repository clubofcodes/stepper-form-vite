// No. Of Steps Forms
export const TOTAL_NO_OF_STEPS = 3;

// Step - 1 constants
export const STATE_OPTIONS_LIST = [
  "Gujarat",
  "New York",
  "Bihar",
  "California",
  "Rajasthan",
  "Assam",
];

// Step - 2 constants
export const COMPANY_WORKING_FIELDS_OPTIONS_LIST = [
  { label: "UI/UX & Design Development", value: "designDev" },
  { label: "Frontend Development", value: "feDev" },
  { label: "Cross Platform", value: "xPlatform" },
  { label: "Backend Development", value: "beDev" },
  { label: "CRM", value: "crm" },
  { label: "CMS", value: "cms" },
  { label: "SaaS", value: "saas" },
];

export const COMPANY_WFH_POLICY_RADIO_OPTION_LIST = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

export const EMPLOYEES_RANGE_OPTIONS_LIST = ["1-10", "10-20", "20-30", "40+"];

// Step - 3 constants
export const PLAN_TYPE_OPTIONS_LIST = [
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];

export const PLAN_CATEGORY_OPTIONS_LIST = ["gold", "titanium"];

export const PLAN_PRICING_OBJ = {
  monthly: {
    gold: 73,
    titanium: 118,
  },
  yearly: {
    gold: 730,
    titanium: 1280,
  },
};
