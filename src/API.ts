/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCandidateInput = {
  id?: string | null,
  name: string,
  email: string,
  phone?: string | null,
};

export type ModelCandidateConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelCandidateConditionInput | null > | null,
  or?: Array< ModelCandidateConditionInput | null > | null,
  not?: ModelCandidateConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Candidate = {
  __typename: "Candidate",
  id: string,
  name: string,
  email: string,
  phone?: string | null,
  workExperiences?: ModelWorkExperienceConnection | null,
  educations?: ModelEducationConnection | null,
  certifications?: ModelCertificationConnection | null,
  applications?: ModelApplicationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelWorkExperienceConnection = {
  __typename: "ModelWorkExperienceConnection",
  items:  Array<WorkExperience | null >,
  nextToken?: string | null,
};

export type WorkExperience = {
  __typename: "WorkExperience",
  id: string,
  candidate_id: string,
  company?: string | null,
  role?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEducationConnection = {
  __typename: "ModelEducationConnection",
  items:  Array<Education | null >,
  nextToken?: string | null,
};

export type Education = {
  __typename: "Education",
  id: string,
  candidate_id: string,
  school?: string | null,
  degree?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCertificationConnection = {
  __typename: "ModelCertificationConnection",
  items:  Array<Certification | null >,
  nextToken?: string | null,
};

export type Certification = {
  __typename: "Certification",
  id: string,
  candidate_id: string,
  title?: string | null,
  issuedBy?: string | null,
  issueDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelApplicationConnection = {
  __typename: "ModelApplicationConnection",
  items:  Array<Application | null >,
  nextToken?: string | null,
};

export type Application = {
  __typename: "Application",
  id: string,
  candidate_id: string,
  job_id: string,
  status?: string | null,
  feedbacks?: ModelFeedbackConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFeedbackConnection = {
  __typename: "ModelFeedbackConnection",
  items:  Array<Feedback | null >,
  nextToken?: string | null,
};

export type Feedback = {
  __typename: "Feedback",
  id: string,
  application_id: string,
  comment?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCandidateInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
};

export type DeleteCandidateInput = {
  id: string,
};

export type CreateWorkExperienceInput = {
  id?: string | null,
  candidate_id: string,
  company?: string | null,
  role?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type ModelWorkExperienceConditionInput = {
  candidate_id?: ModelIDInput | null,
  company?: ModelStringInput | null,
  role?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelWorkExperienceConditionInput | null > | null,
  or?: Array< ModelWorkExperienceConditionInput | null > | null,
  not?: ModelWorkExperienceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateWorkExperienceInput = {
  id: string,
  candidate_id?: string | null,
  company?: string | null,
  role?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type DeleteWorkExperienceInput = {
  id: string,
};

export type CreateEducationInput = {
  id?: string | null,
  candidate_id: string,
  school?: string | null,
  degree?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type ModelEducationConditionInput = {
  candidate_id?: ModelIDInput | null,
  school?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelEducationConditionInput | null > | null,
  or?: Array< ModelEducationConditionInput | null > | null,
  not?: ModelEducationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateEducationInput = {
  id: string,
  candidate_id?: string | null,
  school?: string | null,
  degree?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type DeleteEducationInput = {
  id: string,
};

export type CreateCertificationInput = {
  id?: string | null,
  candidate_id: string,
  title?: string | null,
  issuedBy?: string | null,
  issueDate?: string | null,
};

export type ModelCertificationConditionInput = {
  candidate_id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  issuedBy?: ModelStringInput | null,
  issueDate?: ModelStringInput | null,
  and?: Array< ModelCertificationConditionInput | null > | null,
  or?: Array< ModelCertificationConditionInput | null > | null,
  not?: ModelCertificationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCertificationInput = {
  id: string,
  candidate_id?: string | null,
  title?: string | null,
  issuedBy?: string | null,
  issueDate?: string | null,
};

export type DeleteCertificationInput = {
  id: string,
};

export type CreateJobInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type ModelJobConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelJobConditionInput | null > | null,
  or?: Array< ModelJobConditionInput | null > | null,
  not?: ModelJobConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Job = {
  __typename: "Job",
  id: string,
  title: string,
  description?: string | null,
  applications?: ModelApplicationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJobInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteJobInput = {
  id: string,
};

export type CreateApplicationInput = {
  id?: string | null,
  candidate_id: string,
  job_id: string,
  status?: string | null,
};

export type ModelApplicationConditionInput = {
  candidate_id?: ModelIDInput | null,
  job_id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelApplicationConditionInput | null > | null,
  or?: Array< ModelApplicationConditionInput | null > | null,
  not?: ModelApplicationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateApplicationInput = {
  id: string,
  candidate_id?: string | null,
  job_id?: string | null,
  status?: string | null,
};

export type DeleteApplicationInput = {
  id: string,
};

export type CreateFeedbackInput = {
  id?: string | null,
  application_id: string,
  comment?: string | null,
  createdAt?: string | null,
};

export type ModelFeedbackConditionInput = {
  application_id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFeedbackConditionInput | null > | null,
  or?: Array< ModelFeedbackConditionInput | null > | null,
  not?: ModelFeedbackConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFeedbackInput = {
  id: string,
  application_id?: string | null,
  comment?: string | null,
  createdAt?: string | null,
};

export type DeleteFeedbackInput = {
  id: string,
};

export type CreateOrganizationInput = {
  id?: string | null,
  name: string,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  name: string,
  financialDetails?: ModelFinancialDetailsConnection | null,
  profiles?: ModelProfileConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFinancialDetailsConnection = {
  __typename: "ModelFinancialDetailsConnection",
  items:  Array<FinancialDetails | null >,
  nextToken?: string | null,
};

export type FinancialDetails = {
  __typename: "FinancialDetails",
  id: string,
  organization_id: string,
  revenue?: number | null,
  employees?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  organization_id: string,
  role?: string | null,
  userName?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type CreateFinancialDetailsInput = {
  id?: string | null,
  organization_id: string,
  revenue?: number | null,
  employees?: number | null,
};

export type ModelFinancialDetailsConditionInput = {
  organization_id?: ModelIDInput | null,
  revenue?: ModelFloatInput | null,
  employees?: ModelIntInput | null,
  and?: Array< ModelFinancialDetailsConditionInput | null > | null,
  or?: Array< ModelFinancialDetailsConditionInput | null > | null,
  not?: ModelFinancialDetailsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFinancialDetailsInput = {
  id: string,
  organization_id?: string | null,
  revenue?: number | null,
  employees?: number | null,
};

export type DeleteFinancialDetailsInput = {
  id: string,
};

export type CreateProfileInput = {
  id?: string | null,
  organization_id: string,
  role?: string | null,
  userName?: string | null,
};

export type ModelProfileConditionInput = {
  organization_id?: ModelIDInput | null,
  role?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateProfileInput = {
  id: string,
  organization_id?: string | null,
  role?: string | null,
  userName?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type ModelCandidateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCandidateFilterInput | null > | null,
  or?: Array< ModelCandidateFilterInput | null > | null,
  not?: ModelCandidateFilterInput | null,
};

export type ModelCandidateConnection = {
  __typename: "ModelCandidateConnection",
  items:  Array<Candidate | null >,
  nextToken?: string | null,
};

export type ModelWorkExperienceFilterInput = {
  id?: ModelIDInput | null,
  candidate_id?: ModelIDInput | null,
  company?: ModelStringInput | null,
  role?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWorkExperienceFilterInput | null > | null,
  or?: Array< ModelWorkExperienceFilterInput | null > | null,
  not?: ModelWorkExperienceFilterInput | null,
};

export type ModelEducationFilterInput = {
  id?: ModelIDInput | null,
  candidate_id?: ModelIDInput | null,
  school?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEducationFilterInput | null > | null,
  or?: Array< ModelEducationFilterInput | null > | null,
  not?: ModelEducationFilterInput | null,
};

export type ModelCertificationFilterInput = {
  id?: ModelIDInput | null,
  candidate_id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  issuedBy?: ModelStringInput | null,
  issueDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCertificationFilterInput | null > | null,
  or?: Array< ModelCertificationFilterInput | null > | null,
  not?: ModelCertificationFilterInput | null,
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobFilterInput | null > | null,
  or?: Array< ModelJobFilterInput | null > | null,
  not?: ModelJobFilterInput | null,
};

export type ModelJobConnection = {
  __typename: "ModelJobConnection",
  items:  Array<Job | null >,
  nextToken?: string | null,
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null,
  candidate_id?: ModelIDInput | null,
  job_id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelApplicationFilterInput | null > | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  not?: ModelApplicationFilterInput | null,
};

export type ModelFeedbackFilterInput = {
  id?: ModelIDInput | null,
  application_id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFeedbackFilterInput | null > | null,
  or?: Array< ModelFeedbackFilterInput | null > | null,
  not?: ModelFeedbackFilterInput | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type ModelFinancialDetailsFilterInput = {
  id?: ModelIDInput | null,
  organization_id?: ModelIDInput | null,
  revenue?: ModelFloatInput | null,
  employees?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFinancialDetailsFilterInput | null > | null,
  or?: Array< ModelFinancialDetailsFilterInput | null > | null,
  not?: ModelFinancialDetailsFilterInput | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  organization_id?: ModelIDInput | null,
  role?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionCandidateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCandidateFilterInput | null > | null,
  or?: Array< ModelSubscriptionCandidateFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionWorkExperienceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  candidate_id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkExperienceFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkExperienceFilterInput | null > | null,
};

export type ModelSubscriptionEducationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  candidate_id?: ModelSubscriptionIDInput | null,
  school?: ModelSubscriptionStringInput | null,
  degree?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEducationFilterInput | null > | null,
  or?: Array< ModelSubscriptionEducationFilterInput | null > | null,
};

export type ModelSubscriptionCertificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  candidate_id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  issuedBy?: ModelSubscriptionStringInput | null,
  issueDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCertificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionCertificationFilterInput | null > | null,
};

export type ModelSubscriptionJobFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJobFilterInput | null > | null,
  or?: Array< ModelSubscriptionJobFilterInput | null > | null,
};

export type ModelSubscriptionApplicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  candidate_id?: ModelSubscriptionIDInput | null,
  job_id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
};

export type ModelSubscriptionFeedbackFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  application_id?: ModelSubscriptionIDInput | null,
  comment?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeedbackFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeedbackFilterInput | null > | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
};

export type ModelSubscriptionFinancialDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  organization_id?: ModelSubscriptionIDInput | null,
  revenue?: ModelSubscriptionFloatInput | null,
  employees?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFinancialDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFinancialDetailsFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  organization_id?: ModelSubscriptionIDInput | null,
  role?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type CreateCandidateMutationVariables = {
  input: CreateCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type CreateCandidateMutation = {
  createCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        id: string,
        candidate_id: string,
        company?: string | null,
        role?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        id: string,
        candidate_id: string,
        school?: string | null,
        degree?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        candidate_id: string,
        title?: string | null,
        issuedBy?: string | null,
        issueDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCandidateMutationVariables = {
  input: UpdateCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type UpdateCandidateMutation = {
  updateCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        id: string,
        candidate_id: string,
        company?: string | null,
        role?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        id: string,
        candidate_id: string,
        school?: string | null,
        degree?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        candidate_id: string,
        title?: string | null,
        issuedBy?: string | null,
        issueDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCandidateMutationVariables = {
  input: DeleteCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type DeleteCandidateMutation = {
  deleteCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        id: string,
        candidate_id: string,
        company?: string | null,
        role?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        id: string,
        candidate_id: string,
        school?: string | null,
        degree?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        candidate_id: string,
        title?: string | null,
        issuedBy?: string | null,
        issueDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkExperienceMutationVariables = {
  input: CreateWorkExperienceInput,
  condition?: ModelWorkExperienceConditionInput | null,
};

export type CreateWorkExperienceMutation = {
  createWorkExperience?:  {
    __typename: "WorkExperience",
    id: string,
    candidate_id: string,
    company?: string | null,
    role?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkExperienceMutationVariables = {
  input: UpdateWorkExperienceInput,
  condition?: ModelWorkExperienceConditionInput | null,
};

export type UpdateWorkExperienceMutation = {
  updateWorkExperience?:  {
    __typename: "WorkExperience",
    id: string,
    candidate_id: string,
    company?: string | null,
    role?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkExperienceMutationVariables = {
  input: DeleteWorkExperienceInput,
  condition?: ModelWorkExperienceConditionInput | null,
};

export type DeleteWorkExperienceMutation = {
  deleteWorkExperience?:  {
    __typename: "WorkExperience",
    id: string,
    candidate_id: string,
    company?: string | null,
    role?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEducationMutationVariables = {
  input: CreateEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type CreateEducationMutation = {
  createEducation?:  {
    __typename: "Education",
    id: string,
    candidate_id: string,
    school?: string | null,
    degree?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEducationMutationVariables = {
  input: UpdateEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type UpdateEducationMutation = {
  updateEducation?:  {
    __typename: "Education",
    id: string,
    candidate_id: string,
    school?: string | null,
    degree?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEducationMutationVariables = {
  input: DeleteEducationInput,
  condition?: ModelEducationConditionInput | null,
};

export type DeleteEducationMutation = {
  deleteEducation?:  {
    __typename: "Education",
    id: string,
    candidate_id: string,
    school?: string | null,
    degree?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCertificationMutationVariables = {
  input: CreateCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type CreateCertificationMutation = {
  createCertification?:  {
    __typename: "Certification",
    id: string,
    candidate_id: string,
    title?: string | null,
    issuedBy?: string | null,
    issueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCertificationMutationVariables = {
  input: UpdateCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type UpdateCertificationMutation = {
  updateCertification?:  {
    __typename: "Certification",
    id: string,
    candidate_id: string,
    title?: string | null,
    issuedBy?: string | null,
    issueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCertificationMutationVariables = {
  input: DeleteCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type DeleteCertificationMutation = {
  deleteCertification?:  {
    __typename: "Certification",
    id: string,
    candidate_id: string,
    title?: string | null,
    issuedBy?: string | null,
    issueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJobMutationVariables = {
  input: CreateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type CreateJobMutation = {
  createJob?:  {
    __typename: "Job",
    id: string,
    title: string,
    description?: string | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobMutationVariables = {
  input: UpdateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type UpdateJobMutation = {
  updateJob?:  {
    __typename: "Job",
    id: string,
    title: string,
    description?: string | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobMutationVariables = {
  input: DeleteJobInput,
  condition?: ModelJobConditionInput | null,
};

export type DeleteJobMutation = {
  deleteJob?:  {
    __typename: "Job",
    id: string,
    title: string,
    description?: string | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicationMutationVariables = {
  input: CreateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type CreateApplicationMutation = {
  createApplication?:  {
    __typename: "Application",
    id: string,
    candidate_id: string,
    job_id: string,
    status?: string | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        application_id: string,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  input: UpdateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type UpdateApplicationMutation = {
  updateApplication?:  {
    __typename: "Application",
    id: string,
    candidate_id: string,
    job_id: string,
    status?: string | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        application_id: string,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  input: DeleteApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type DeleteApplicationMutation = {
  deleteApplication?:  {
    __typename: "Application",
    id: string,
    candidate_id: string,
    job_id: string,
    status?: string | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        application_id: string,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFeedbackMutationVariables = {
  input: CreateFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type CreateFeedbackMutation = {
  createFeedback?:  {
    __typename: "Feedback",
    id: string,
    application_id: string,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeedbackMutationVariables = {
  input: UpdateFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type UpdateFeedbackMutation = {
  updateFeedback?:  {
    __typename: "Feedback",
    id: string,
    application_id: string,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeedbackMutationVariables = {
  input: DeleteFeedbackInput,
  condition?: ModelFeedbackConditionInput | null,
};

export type DeleteFeedbackMutation = {
  deleteFeedback?:  {
    __typename: "Feedback",
    id: string,
    application_id: string,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    financialDetails?:  {
      __typename: "ModelFinancialDetailsConnection",
      items:  Array< {
        __typename: "FinancialDetails",
        id: string,
        organization_id: string,
        revenue?: number | null,
        employees?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileConnection",
      items:  Array< {
        __typename: "Profile",
        id: string,
        organization_id: string,
        role?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    financialDetails?:  {
      __typename: "ModelFinancialDetailsConnection",
      items:  Array< {
        __typename: "FinancialDetails",
        id: string,
        organization_id: string,
        revenue?: number | null,
        employees?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileConnection",
      items:  Array< {
        __typename: "Profile",
        id: string,
        organization_id: string,
        role?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    financialDetails?:  {
      __typename: "ModelFinancialDetailsConnection",
      items:  Array< {
        __typename: "FinancialDetails",
        id: string,
        organization_id: string,
        revenue?: number | null,
        employees?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileConnection",
      items:  Array< {
        __typename: "Profile",
        id: string,
        organization_id: string,
        role?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFinancialDetailsMutationVariables = {
  input: CreateFinancialDetailsInput,
  condition?: ModelFinancialDetailsConditionInput | null,
};

export type CreateFinancialDetailsMutation = {
  createFinancialDetails?:  {
    __typename: "FinancialDetails",
    id: string,
    organization_id: string,
    revenue?: number | null,
    employees?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFinancialDetailsMutationVariables = {
  input: UpdateFinancialDetailsInput,
  condition?: ModelFinancialDetailsConditionInput | null,
};

export type UpdateFinancialDetailsMutation = {
  updateFinancialDetails?:  {
    __typename: "FinancialDetails",
    id: string,
    organization_id: string,
    revenue?: number | null,
    employees?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFinancialDetailsMutationVariables = {
  input: DeleteFinancialDetailsInput,
  condition?: ModelFinancialDetailsConditionInput | null,
};

export type DeleteFinancialDetailsMutation = {
  deleteFinancialDetails?:  {
    __typename: "FinancialDetails",
    id: string,
    organization_id: string,
    revenue?: number | null,
    employees?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    organization_id: string,
    role?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    organization_id: string,
    role?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    organization_id: string,
    role?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCandidateQueryVariables = {
  id: string,
};

export type GetCandidateQuery = {
  getCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        id: string,
        candidate_id: string,
        company?: string | null,
        role?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        id: string,
        candidate_id: string,
        school?: string | null,
        degree?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        candidate_id: string,
        title?: string | null,
        issuedBy?: string | null,
        issueDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCandidatesQueryVariables = {
  filter?: ModelCandidateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCandidatesQuery = {
  listCandidates?:  {
    __typename: "ModelCandidateConnection",
    items:  Array< {
      __typename: "Candidate",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      workExperiences?:  {
        __typename: "ModelWorkExperienceConnection",
        items:  Array< {
          __typename: "WorkExperience",
          id: string,
          candidate_id: string,
          company?: string | null,
          role?: string | null,
          startDate?: string | null,
          endDate?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      educations?:  {
        __typename: "ModelEducationConnection",
        items:  Array< {
          __typename: "Education",
          id: string,
          candidate_id: string,
          school?: string | null,
          degree?: string | null,
          startDate?: string | null,
          endDate?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      certifications?:  {
        __typename: "ModelCertificationConnection",
        items:  Array< {
          __typename: "Certification",
          id: string,
          candidate_id: string,
          title?: string | null,
          issuedBy?: string | null,
          issueDate?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      applications?:  {
        __typename: "ModelApplicationConnection",
        items:  Array< {
          __typename: "Application",
          id: string,
          candidate_id: string,
          job_id: string,
          status?: string | null,
          feedbacks?:  {
            __typename: "ModelFeedbackConnection",
            items:  Array< {
              __typename: "Feedback",
              id: string,
              application_id: string,
              comment?: string | null,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkExperienceQueryVariables = {
  id: string,
};

export type GetWorkExperienceQuery = {
  getWorkExperience?:  {
    __typename: "WorkExperience",
    id: string,
    candidate_id: string,
    company?: string | null,
    role?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkExperiencesQueryVariables = {
  filter?: ModelWorkExperienceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkExperiencesQuery = {
  listWorkExperiences?:  {
    __typename: "ModelWorkExperienceConnection",
    items:  Array< {
      __typename: "WorkExperience",
      id: string,
      candidate_id: string,
      company?: string | null,
      role?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEducationQueryVariables = {
  id: string,
};

export type GetEducationQuery = {
  getEducation?:  {
    __typename: "Education",
    id: string,
    candidate_id: string,
    school?: string | null,
    degree?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEducationsQueryVariables = {
  filter?: ModelEducationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEducationsQuery = {
  listEducations?:  {
    __typename: "ModelEducationConnection",
    items:  Array< {
      __typename: "Education",
      id: string,
      candidate_id: string,
      school?: string | null,
      degree?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCertificationQueryVariables = {
  id: string,
};

export type GetCertificationQuery = {
  getCertification?:  {
    __typename: "Certification",
    id: string,
    candidate_id: string,
    title?: string | null,
    issuedBy?: string | null,
    issueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCertificationsQueryVariables = {
  filter?: ModelCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCertificationsQuery = {
  listCertifications?:  {
    __typename: "ModelCertificationConnection",
    items:  Array< {
      __typename: "Certification",
      id: string,
      candidate_id: string,
      title?: string | null,
      issuedBy?: string | null,
      issueDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetJobQueryVariables = {
  id: string,
};

export type GetJobQuery = {
  getJob?:  {
    __typename: "Job",
    id: string,
    title: string,
    description?: string | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: ModelJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobsQuery = {
  listJobs?:  {
    __typename: "ModelJobConnection",
    items:  Array< {
      __typename: "Job",
      id: string,
      title: string,
      description?: string | null,
      applications?:  {
        __typename: "ModelApplicationConnection",
        items:  Array< {
          __typename: "Application",
          id: string,
          candidate_id: string,
          job_id: string,
          status?: string | null,
          feedbacks?:  {
            __typename: "ModelFeedbackConnection",
            items:  Array< {
              __typename: "Feedback",
              id: string,
              application_id: string,
              comment?: string | null,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication?:  {
    __typename: "Application",
    id: string,
    candidate_id: string,
    job_id: string,
    status?: string | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        application_id: string,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      candidate_id: string,
      job_id: string,
      status?: string | null,
      feedbacks?:  {
        __typename: "ModelFeedbackConnection",
        items:  Array< {
          __typename: "Feedback",
          id: string,
          application_id: string,
          comment?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeedbackQueryVariables = {
  id: string,
};

export type GetFeedbackQuery = {
  getFeedback?:  {
    __typename: "Feedback",
    id: string,
    application_id: string,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeedbacksQueryVariables = {
  filter?: ModelFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedbacksQuery = {
  listFeedbacks?:  {
    __typename: "ModelFeedbackConnection",
    items:  Array< {
      __typename: "Feedback",
      id: string,
      application_id: string,
      comment?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    financialDetails?:  {
      __typename: "ModelFinancialDetailsConnection",
      items:  Array< {
        __typename: "FinancialDetails",
        id: string,
        organization_id: string,
        revenue?: number | null,
        employees?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileConnection",
      items:  Array< {
        __typename: "Profile",
        id: string,
        organization_id: string,
        role?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      financialDetails?:  {
        __typename: "ModelFinancialDetailsConnection",
        items:  Array< {
          __typename: "FinancialDetails",
          id: string,
          organization_id: string,
          revenue?: number | null,
          employees?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileConnection",
        items:  Array< {
          __typename: "Profile",
          id: string,
          organization_id: string,
          role?: string | null,
          userName?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFinancialDetailsQueryVariables = {
  id: string,
};

export type GetFinancialDetailsQuery = {
  getFinancialDetails?:  {
    __typename: "FinancialDetails",
    id: string,
    organization_id: string,
    revenue?: number | null,
    employees?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFinancialDetailsQueryVariables = {
  filter?: ModelFinancialDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFinancialDetailsQuery = {
  listFinancialDetails?:  {
    __typename: "ModelFinancialDetailsConnection",
    items:  Array< {
      __typename: "FinancialDetails",
      id: string,
      organization_id: string,
      revenue?: number | null,
      employees?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    organization_id: string,
    role?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      organization_id: string,
      role?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type WorkExperiencesByCandidate_idQueryVariables = {
  candidate_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWorkExperienceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WorkExperiencesByCandidate_idQuery = {
  workExperiencesByCandidate_id?:  {
    __typename: "ModelWorkExperienceConnection",
    items:  Array< {
      __typename: "WorkExperience",
      id: string,
      candidate_id: string,
      company?: string | null,
      role?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EducationsByCandidate_idQueryVariables = {
  candidate_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEducationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EducationsByCandidate_idQuery = {
  educationsByCandidate_id?:  {
    __typename: "ModelEducationConnection",
    items:  Array< {
      __typename: "Education",
      id: string,
      candidate_id: string,
      school?: string | null,
      degree?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CertificationsByCandidate_idQueryVariables = {
  candidate_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CertificationsByCandidate_idQuery = {
  certificationsByCandidate_id?:  {
    __typename: "ModelCertificationConnection",
    items:  Array< {
      __typename: "Certification",
      id: string,
      candidate_id: string,
      title?: string | null,
      issuedBy?: string | null,
      issueDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByCandidate_idQueryVariables = {
  candidate_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByCandidate_idQuery = {
  applicationsByCandidate_id?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      candidate_id: string,
      job_id: string,
      status?: string | null,
      feedbacks?:  {
        __typename: "ModelFeedbackConnection",
        items:  Array< {
          __typename: "Feedback",
          id: string,
          application_id: string,
          comment?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByJob_idQueryVariables = {
  job_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByJob_idQuery = {
  applicationsByJob_id?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      candidate_id: string,
      job_id: string,
      status?: string | null,
      feedbacks?:  {
        __typename: "ModelFeedbackConnection",
        items:  Array< {
          __typename: "Feedback",
          id: string,
          application_id: string,
          comment?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FeedbacksByApplication_idAndCreatedAtQueryVariables = {
  application_id: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FeedbacksByApplication_idAndCreatedAtQuery = {
  feedbacksByApplication_idAndCreatedAt?:  {
    __typename: "ModelFeedbackConnection",
    items:  Array< {
      __typename: "Feedback",
      id: string,
      application_id: string,
      comment?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FinancialDetailsByOrganization_idQueryVariables = {
  organization_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFinancialDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FinancialDetailsByOrganization_idQuery = {
  financialDetailsByOrganization_id?:  {
    __typename: "ModelFinancialDetailsConnection",
    items:  Array< {
      __typename: "FinancialDetails",
      id: string,
      organization_id: string,
      revenue?: number | null,
      employees?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfilesByOrganization_idQueryVariables = {
  organization_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfilesByOrganization_idQuery = {
  profilesByOrganization_id?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      organization_id: string,
      role?: string | null,
      userName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
};

export type OnCreateCandidateSubscription = {
  onCreateCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        id: string,
        candidate_id: string,
        company?: string | null,
        role?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        id: string,
        candidate_id: string,
        school?: string | null,
        degree?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        candidate_id: string,
        title?: string | null,
        issuedBy?: string | null,
        issueDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
};

export type OnUpdateCandidateSubscription = {
  onUpdateCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        id: string,
        candidate_id: string,
        company?: string | null,
        role?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        id: string,
        candidate_id: string,
        school?: string | null,
        degree?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        candidate_id: string,
        title?: string | null,
        issuedBy?: string | null,
        issueDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
};

export type OnDeleteCandidateSubscription = {
  onDeleteCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    workExperiences?:  {
      __typename: "ModelWorkExperienceConnection",
      items:  Array< {
        __typename: "WorkExperience",
        id: string,
        candidate_id: string,
        company?: string | null,
        role?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    educations?:  {
      __typename: "ModelEducationConnection",
      items:  Array< {
        __typename: "Education",
        id: string,
        candidate_id: string,
        school?: string | null,
        degree?: string | null,
        startDate?: string | null,
        endDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    certifications?:  {
      __typename: "ModelCertificationConnection",
      items:  Array< {
        __typename: "Certification",
        id: string,
        candidate_id: string,
        title?: string | null,
        issuedBy?: string | null,
        issueDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionWorkExperienceFilterInput | null,
};

export type OnCreateWorkExperienceSubscription = {
  onCreateWorkExperience?:  {
    __typename: "WorkExperience",
    id: string,
    candidate_id: string,
    company?: string | null,
    role?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionWorkExperienceFilterInput | null,
};

export type OnUpdateWorkExperienceSubscription = {
  onUpdateWorkExperience?:  {
    __typename: "WorkExperience",
    id: string,
    candidate_id: string,
    company?: string | null,
    role?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkExperienceSubscriptionVariables = {
  filter?: ModelSubscriptionWorkExperienceFilterInput | null,
};

export type OnDeleteWorkExperienceSubscription = {
  onDeleteWorkExperience?:  {
    __typename: "WorkExperience",
    id: string,
    candidate_id: string,
    company?: string | null,
    role?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEducationSubscriptionVariables = {
  filter?: ModelSubscriptionEducationFilterInput | null,
};

export type OnCreateEducationSubscription = {
  onCreateEducation?:  {
    __typename: "Education",
    id: string,
    candidate_id: string,
    school?: string | null,
    degree?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEducationSubscriptionVariables = {
  filter?: ModelSubscriptionEducationFilterInput | null,
};

export type OnUpdateEducationSubscription = {
  onUpdateEducation?:  {
    __typename: "Education",
    id: string,
    candidate_id: string,
    school?: string | null,
    degree?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEducationSubscriptionVariables = {
  filter?: ModelSubscriptionEducationFilterInput | null,
};

export type OnDeleteEducationSubscription = {
  onDeleteEducation?:  {
    __typename: "Education",
    id: string,
    candidate_id: string,
    school?: string | null,
    degree?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnCreateCertificationSubscription = {
  onCreateCertification?:  {
    __typename: "Certification",
    id: string,
    candidate_id: string,
    title?: string | null,
    issuedBy?: string | null,
    issueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnUpdateCertificationSubscription = {
  onUpdateCertification?:  {
    __typename: "Certification",
    id: string,
    candidate_id: string,
    title?: string | null,
    issuedBy?: string | null,
    issueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnDeleteCertificationSubscription = {
  onDeleteCertification?:  {
    __typename: "Certification",
    id: string,
    candidate_id: string,
    title?: string | null,
    issuedBy?: string | null,
    issueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnCreateJobSubscription = {
  onCreateJob?:  {
    __typename: "Job",
    id: string,
    title: string,
    description?: string | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnUpdateJobSubscription = {
  onUpdateJob?:  {
    __typename: "Job",
    id: string,
    title: string,
    description?: string | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnDeleteJobSubscription = {
  onDeleteJob?:  {
    __typename: "Job",
    id: string,
    title: string,
    description?: string | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      items:  Array< {
        __typename: "Application",
        id: string,
        candidate_id: string,
        job_id: string,
        status?: string | null,
        feedbacks?:  {
          __typename: "ModelFeedbackConnection",
          items:  Array< {
            __typename: "Feedback",
            id: string,
            application_id: string,
            comment?: string | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication?:  {
    __typename: "Application",
    id: string,
    candidate_id: string,
    job_id: string,
    status?: string | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        application_id: string,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication?:  {
    __typename: "Application",
    id: string,
    candidate_id: string,
    job_id: string,
    status?: string | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        application_id: string,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication?:  {
    __typename: "Application",
    id: string,
    candidate_id: string,
    job_id: string,
    status?: string | null,
    feedbacks?:  {
      __typename: "ModelFeedbackConnection",
      items:  Array< {
        __typename: "Feedback",
        id: string,
        application_id: string,
        comment?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFilterInput | null,
};

export type OnCreateFeedbackSubscription = {
  onCreateFeedback?:  {
    __typename: "Feedback",
    id: string,
    application_id: string,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFilterInput | null,
};

export type OnUpdateFeedbackSubscription = {
  onUpdateFeedback?:  {
    __typename: "Feedback",
    id: string,
    application_id: string,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFilterInput | null,
};

export type OnDeleteFeedbackSubscription = {
  onDeleteFeedback?:  {
    __typename: "Feedback",
    id: string,
    application_id: string,
    comment?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    financialDetails?:  {
      __typename: "ModelFinancialDetailsConnection",
      items:  Array< {
        __typename: "FinancialDetails",
        id: string,
        organization_id: string,
        revenue?: number | null,
        employees?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileConnection",
      items:  Array< {
        __typename: "Profile",
        id: string,
        organization_id: string,
        role?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    financialDetails?:  {
      __typename: "ModelFinancialDetailsConnection",
      items:  Array< {
        __typename: "FinancialDetails",
        id: string,
        organization_id: string,
        revenue?: number | null,
        employees?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileConnection",
      items:  Array< {
        __typename: "Profile",
        id: string,
        organization_id: string,
        role?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    financialDetails?:  {
      __typename: "ModelFinancialDetailsConnection",
      items:  Array< {
        __typename: "FinancialDetails",
        id: string,
        organization_id: string,
        revenue?: number | null,
        employees?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileConnection",
      items:  Array< {
        __typename: "Profile",
        id: string,
        organization_id: string,
        role?: string | null,
        userName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFinancialDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionFinancialDetailsFilterInput | null,
};

export type OnCreateFinancialDetailsSubscription = {
  onCreateFinancialDetails?:  {
    __typename: "FinancialDetails",
    id: string,
    organization_id: string,
    revenue?: number | null,
    employees?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFinancialDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionFinancialDetailsFilterInput | null,
};

export type OnUpdateFinancialDetailsSubscription = {
  onUpdateFinancialDetails?:  {
    __typename: "FinancialDetails",
    id: string,
    organization_id: string,
    revenue?: number | null,
    employees?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFinancialDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionFinancialDetailsFilterInput | null,
};

export type OnDeleteFinancialDetailsSubscription = {
  onDeleteFinancialDetails?:  {
    __typename: "FinancialDetails",
    id: string,
    organization_id: string,
    revenue?: number | null,
    employees?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    organization_id: string,
    role?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    organization_id: string,
    role?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    organization_id: string,
    role?: string | null,
    userName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
