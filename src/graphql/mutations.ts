/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCandidate = /* GraphQL */ `mutation CreateCandidate(
  $input: CreateCandidateInput!
  $condition: ModelCandidateConditionInput
) {
  createCandidate(input: $input, condition: $condition) {
    id
    name
    email
    phone
    workExperiences {
      items {
        id
        candidate_id
        company
        role
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    educations {
      items {
        id
        candidate_id
        school
        degree
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    certifications {
      items {
        id
        candidate_id
        title
        issuedBy
        issueDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    applications {
      items {
        id
        candidate_id
        job_id
        status
        feedbacks {
          items {
            id
            application_id
            comment
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCandidateMutationVariables,
  APITypes.CreateCandidateMutation
>;
export const updateCandidate = /* GraphQL */ `mutation UpdateCandidate(
  $input: UpdateCandidateInput!
  $condition: ModelCandidateConditionInput
) {
  updateCandidate(input: $input, condition: $condition) {
    id
    name
    email
    phone
    workExperiences {
      items {
        id
        candidate_id
        company
        role
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    educations {
      items {
        id
        candidate_id
        school
        degree
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    certifications {
      items {
        id
        candidate_id
        title
        issuedBy
        issueDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    applications {
      items {
        id
        candidate_id
        job_id
        status
        feedbacks {
          items {
            id
            application_id
            comment
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCandidateMutationVariables,
  APITypes.UpdateCandidateMutation
>;
export const deleteCandidate = /* GraphQL */ `mutation DeleteCandidate(
  $input: DeleteCandidateInput!
  $condition: ModelCandidateConditionInput
) {
  deleteCandidate(input: $input, condition: $condition) {
    id
    name
    email
    phone
    workExperiences {
      items {
        id
        candidate_id
        company
        role
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    educations {
      items {
        id
        candidate_id
        school
        degree
        startDate
        endDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    certifications {
      items {
        id
        candidate_id
        title
        issuedBy
        issueDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    applications {
      items {
        id
        candidate_id
        job_id
        status
        feedbacks {
          items {
            id
            application_id
            comment
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCandidateMutationVariables,
  APITypes.DeleteCandidateMutation
>;
export const createWorkExperience = /* GraphQL */ `mutation CreateWorkExperience(
  $input: CreateWorkExperienceInput!
  $condition: ModelWorkExperienceConditionInput
) {
  createWorkExperience(input: $input, condition: $condition) {
    id
    candidate_id
    company
    role
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWorkExperienceMutationVariables,
  APITypes.CreateWorkExperienceMutation
>;
export const updateWorkExperience = /* GraphQL */ `mutation UpdateWorkExperience(
  $input: UpdateWorkExperienceInput!
  $condition: ModelWorkExperienceConditionInput
) {
  updateWorkExperience(input: $input, condition: $condition) {
    id
    candidate_id
    company
    role
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWorkExperienceMutationVariables,
  APITypes.UpdateWorkExperienceMutation
>;
export const deleteWorkExperience = /* GraphQL */ `mutation DeleteWorkExperience(
  $input: DeleteWorkExperienceInput!
  $condition: ModelWorkExperienceConditionInput
) {
  deleteWorkExperience(input: $input, condition: $condition) {
    id
    candidate_id
    company
    role
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWorkExperienceMutationVariables,
  APITypes.DeleteWorkExperienceMutation
>;
export const createEducation = /* GraphQL */ `mutation CreateEducation(
  $input: CreateEducationInput!
  $condition: ModelEducationConditionInput
) {
  createEducation(input: $input, condition: $condition) {
    id
    candidate_id
    school
    degree
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEducationMutationVariables,
  APITypes.CreateEducationMutation
>;
export const updateEducation = /* GraphQL */ `mutation UpdateEducation(
  $input: UpdateEducationInput!
  $condition: ModelEducationConditionInput
) {
  updateEducation(input: $input, condition: $condition) {
    id
    candidate_id
    school
    degree
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEducationMutationVariables,
  APITypes.UpdateEducationMutation
>;
export const deleteEducation = /* GraphQL */ `mutation DeleteEducation(
  $input: DeleteEducationInput!
  $condition: ModelEducationConditionInput
) {
  deleteEducation(input: $input, condition: $condition) {
    id
    candidate_id
    school
    degree
    startDate
    endDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEducationMutationVariables,
  APITypes.DeleteEducationMutation
>;
export const createCertification = /* GraphQL */ `mutation CreateCertification(
  $input: CreateCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  createCertification(input: $input, condition: $condition) {
    id
    candidate_id
    title
    issuedBy
    issueDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCertificationMutationVariables,
  APITypes.CreateCertificationMutation
>;
export const updateCertification = /* GraphQL */ `mutation UpdateCertification(
  $input: UpdateCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  updateCertification(input: $input, condition: $condition) {
    id
    candidate_id
    title
    issuedBy
    issueDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCertificationMutationVariables,
  APITypes.UpdateCertificationMutation
>;
export const deleteCertification = /* GraphQL */ `mutation DeleteCertification(
  $input: DeleteCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  deleteCertification(input: $input, condition: $condition) {
    id
    candidate_id
    title
    issuedBy
    issueDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCertificationMutationVariables,
  APITypes.DeleteCertificationMutation
>;
export const createJob = /* GraphQL */ `mutation CreateJob(
  $input: CreateJobInput!
  $condition: ModelJobConditionInput
) {
  createJob(input: $input, condition: $condition) {
    id
    title
    description
    applications {
      items {
        id
        candidate_id
        job_id
        status
        feedbacks {
          items {
            id
            application_id
            comment
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateJobMutationVariables,
  APITypes.CreateJobMutation
>;
export const updateJob = /* GraphQL */ `mutation UpdateJob(
  $input: UpdateJobInput!
  $condition: ModelJobConditionInput
) {
  updateJob(input: $input, condition: $condition) {
    id
    title
    description
    applications {
      items {
        id
        candidate_id
        job_id
        status
        feedbacks {
          items {
            id
            application_id
            comment
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateJobMutationVariables,
  APITypes.UpdateJobMutation
>;
export const deleteJob = /* GraphQL */ `mutation DeleteJob(
  $input: DeleteJobInput!
  $condition: ModelJobConditionInput
) {
  deleteJob(input: $input, condition: $condition) {
    id
    title
    description
    applications {
      items {
        id
        candidate_id
        job_id
        status
        feedbacks {
          items {
            id
            application_id
            comment
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteJobMutationVariables,
  APITypes.DeleteJobMutation
>;
export const createApplication = /* GraphQL */ `mutation CreateApplication(
  $input: CreateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  createApplication(input: $input, condition: $condition) {
    id
    candidate_id
    job_id
    status
    feedbacks {
      items {
        id
        application_id
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateApplicationMutationVariables,
  APITypes.CreateApplicationMutation
>;
export const updateApplication = /* GraphQL */ `mutation UpdateApplication(
  $input: UpdateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  updateApplication(input: $input, condition: $condition) {
    id
    candidate_id
    job_id
    status
    feedbacks {
      items {
        id
        application_id
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateApplicationMutationVariables,
  APITypes.UpdateApplicationMutation
>;
export const deleteApplication = /* GraphQL */ `mutation DeleteApplication(
  $input: DeleteApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  deleteApplication(input: $input, condition: $condition) {
    id
    candidate_id
    job_id
    status
    feedbacks {
      items {
        id
        application_id
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteApplicationMutationVariables,
  APITypes.DeleteApplicationMutation
>;
export const createFeedback = /* GraphQL */ `mutation CreateFeedback(
  $input: CreateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  createFeedback(input: $input, condition: $condition) {
    id
    application_id
    comment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackMutationVariables,
  APITypes.CreateFeedbackMutation
>;
export const updateFeedback = /* GraphQL */ `mutation UpdateFeedback(
  $input: UpdateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  updateFeedback(input: $input, condition: $condition) {
    id
    application_id
    comment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackMutationVariables,
  APITypes.UpdateFeedbackMutation
>;
export const deleteFeedback = /* GraphQL */ `mutation DeleteFeedback(
  $input: DeleteFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  deleteFeedback(input: $input, condition: $condition) {
    id
    application_id
    comment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackMutationVariables,
  APITypes.DeleteFeedbackMutation
>;
export const createOrganization = /* GraphQL */ `mutation CreateOrganization(
  $input: CreateOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  createOrganization(input: $input, condition: $condition) {
    id
    name
    financialDetails {
      items {
        id
        organization_id
        revenue
        employees
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    profiles {
      items {
        id
        organization_id
        role
        userName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrganizationMutationVariables,
  APITypes.CreateOrganizationMutation
>;
export const updateOrganization = /* GraphQL */ `mutation UpdateOrganization(
  $input: UpdateOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  updateOrganization(input: $input, condition: $condition) {
    id
    name
    financialDetails {
      items {
        id
        organization_id
        revenue
        employees
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    profiles {
      items {
        id
        organization_id
        role
        userName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrganizationMutationVariables,
  APITypes.UpdateOrganizationMutation
>;
export const deleteOrganization = /* GraphQL */ `mutation DeleteOrganization(
  $input: DeleteOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  deleteOrganization(input: $input, condition: $condition) {
    id
    name
    financialDetails {
      items {
        id
        organization_id
        revenue
        employees
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    profiles {
      items {
        id
        organization_id
        role
        userName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrganizationMutationVariables,
  APITypes.DeleteOrganizationMutation
>;
export const createFinancialDetails = /* GraphQL */ `mutation CreateFinancialDetails(
  $input: CreateFinancialDetailsInput!
  $condition: ModelFinancialDetailsConditionInput
) {
  createFinancialDetails(input: $input, condition: $condition) {
    id
    organization_id
    revenue
    employees
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFinancialDetailsMutationVariables,
  APITypes.CreateFinancialDetailsMutation
>;
export const updateFinancialDetails = /* GraphQL */ `mutation UpdateFinancialDetails(
  $input: UpdateFinancialDetailsInput!
  $condition: ModelFinancialDetailsConditionInput
) {
  updateFinancialDetails(input: $input, condition: $condition) {
    id
    organization_id
    revenue
    employees
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFinancialDetailsMutationVariables,
  APITypes.UpdateFinancialDetailsMutation
>;
export const deleteFinancialDetails = /* GraphQL */ `mutation DeleteFinancialDetails(
  $input: DeleteFinancialDetailsInput!
  $condition: ModelFinancialDetailsConditionInput
) {
  deleteFinancialDetails(input: $input, condition: $condition) {
    id
    organization_id
    revenue
    employees
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFinancialDetailsMutationVariables,
  APITypes.DeleteFinancialDetailsMutation
>;
export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
    id
    organization_id
    role
    userName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
    id
    organization_id
    role
    userName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
    id
    organization_id
    role
    userName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
