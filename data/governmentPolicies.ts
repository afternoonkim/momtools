// Deprecated compatibility file.
// Current government policy pages and search index use data/governmentPolicy.ts.
// Do not import this file for user-facing routes.
export {
  governmentPolicies,
  governmentPolicyCategories,
  governmentPolicyData,
  getGovernmentPolicyBySlug,
  getRelatedGovernmentPolicies,
  governmentPolicyTotalCount,
  POLICY_VERIFIED_AT as POLICY_OFFICIAL_CHECKED_AT,
} from "./governmentPolicy";
