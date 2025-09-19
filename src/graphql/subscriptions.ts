/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCandidate = /* GraphQL */ `subscription OnCreateCandidate($filter: ModelSubscriptionCandidateFilterInput) {
  onCreateCandidate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCandidateSubscriptionVariables,
  APITypes.OnCreateCandidateSubscription
>;
export const onUpdateCandidate = /* GraphQL */ `subscription OnUpdateCandidate($filter: ModelSubscriptionCandidateFilterInput) {
  onUpdateCandidate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCandidateSubscriptionVariables,
  APITypes.OnUpdateCandidateSubscription
>;
export const onDeleteCandidate = /* GraphQL */ `subscription OnDeleteCandidate($filter: ModelSubscriptionCandidateFilterInput) {
  onDeleteCandidate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCandidateSubscriptionVariables,
  APITypes.OnDeleteCandidateSubscription
>;
export const onCreateWorkExperience = /* GraphQL */ `subscription OnCreateWorkExperience(
  $filter: ModelSubscriptionWorkExperienceFilterInput
) {
  onCreateWorkExperience(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWorkExperienceSubscriptionVariables,
  APITypes.OnCreateWorkExperienceSubscription
>;
export const onUpdateWorkExperience = /* GraphQL */ `subscription OnUpdateWorkExperience(
  $filter: ModelSubscriptionWorkExperienceFilterInput
) {
  onUpdateWorkExperience(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWorkExperienceSubscriptionVariables,
  APITypes.OnUpdateWorkExperienceSubscription
>;
export const onDeleteWorkExperience = /* GraphQL */ `subscription OnDeleteWorkExperience(
  $filter: ModelSubscriptionWorkExperienceFilterInput
) {
  onDeleteWorkExperience(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWorkExperienceSubscriptionVariables,
  APITypes.OnDeleteWorkExperienceSubscription
>;
export const onCreateEducation = /* GraphQL */ `subscription OnCreateEducation($filter: ModelSubscriptionEducationFilterInput) {
  onCreateEducation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEducationSubscriptionVariables,
  APITypes.OnCreateEducationSubscription
>;
export const onUpdateEducation = /* GraphQL */ `subscription OnUpdateEducation($filter: ModelSubscriptionEducationFilterInput) {
  onUpdateEducation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEducationSubscriptionVariables,
  APITypes.OnUpdateEducationSubscription
>;
export const onDeleteEducation = /* GraphQL */ `subscription OnDeleteEducation($filter: ModelSubscriptionEducationFilterInput) {
  onDeleteEducation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEducationSubscriptionVariables,
  APITypes.OnDeleteEducationSubscription
>;
export const onCreateCertification = /* GraphQL */ `subscription OnCreateCertification(
  $filter: ModelSubscriptionCertificationFilterInput
) {
  onCreateCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCertificationSubscriptionVariables,
  APITypes.OnCreateCertificationSubscription
>;
export const onUpdateCertification = /* GraphQL */ `subscription OnUpdateCertification(
  $filter: ModelSubscriptionCertificationFilterInput
) {
  onUpdateCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCertificationSubscriptionVariables,
  APITypes.OnUpdateCertificationSubscription
>;
export const onDeleteCertification = /* GraphQL */ `subscription OnDeleteCertification(
  $filter: ModelSubscriptionCertificationFilterInput
) {
  onDeleteCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCertificationSubscriptionVariables,
  APITypes.OnDeleteCertificationSubscription
>;
export const onCreateJob = /* GraphQL */ `subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
  onCreateJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobSubscriptionVariables,
  APITypes.OnCreateJobSubscription
>;
export const onUpdateJob = /* GraphQL */ `subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
  onUpdateJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobSubscriptionVariables,
  APITypes.OnUpdateJobSubscription
>;
export const onDeleteJob = /* GraphQL */ `subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
  onDeleteJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobSubscriptionVariables,
  APITypes.OnDeleteJobSubscription
>;
export const onCreateApplication = /* GraphQL */ `subscription OnCreateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onCreateApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateApplicationSubscriptionVariables,
  APITypes.OnCreateApplicationSubscription
>;
export const onUpdateApplication = /* GraphQL */ `subscription OnUpdateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onUpdateApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationSubscriptionVariables,
  APITypes.OnUpdateApplicationSubscription
>;
export const onDeleteApplication = /* GraphQL */ `subscription OnDeleteApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onDeleteApplication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationSubscriptionVariables,
  APITypes.OnDeleteApplicationSubscription
>;
export const onCreateFeedback = /* GraphQL */ `subscription OnCreateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onCreateFeedback(filter: $filter) {
    id
    application_id
    comment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackSubscriptionVariables,
  APITypes.OnCreateFeedbackSubscription
>;
export const onUpdateFeedback = /* GraphQL */ `subscription OnUpdateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onUpdateFeedback(filter: $filter) {
    id
    application_id
    comment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackSubscriptionVariables,
  APITypes.OnUpdateFeedbackSubscription
>;
export const onDeleteFeedback = /* GraphQL */ `subscription OnDeleteFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onDeleteFeedback(filter: $filter) {
    id
    application_id
    comment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackSubscriptionVariables,
  APITypes.OnDeleteFeedbackSubscription
>;
export const onCreateOrganization = /* GraphQL */ `subscription OnCreateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
) {
  onCreateOrganization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrganizationSubscriptionVariables,
  APITypes.OnCreateOrganizationSubscription
>;
export const onUpdateOrganization = /* GraphQL */ `subscription OnUpdateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
) {
  onUpdateOrganization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrganizationSubscriptionVariables,
  APITypes.OnUpdateOrganizationSubscription
>;
export const onDeleteOrganization = /* GraphQL */ `subscription OnDeleteOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
) {
  onDeleteOrganization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrganizationSubscriptionVariables,
  APITypes.OnDeleteOrganizationSubscription
>;
export const onCreateFinancialDetails = /* GraphQL */ `subscription OnCreateFinancialDetails(
  $filter: ModelSubscriptionFinancialDetailsFilterInput
) {
  onCreateFinancialDetails(filter: $filter) {
    id
    organization_id
    revenue
    employees
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFinancialDetailsSubscriptionVariables,
  APITypes.OnCreateFinancialDetailsSubscription
>;
export const onUpdateFinancialDetails = /* GraphQL */ `subscription OnUpdateFinancialDetails(
  $filter: ModelSubscriptionFinancialDetailsFilterInput
) {
  onUpdateFinancialDetails(filter: $filter) {
    id
    organization_id
    revenue
    employees
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFinancialDetailsSubscriptionVariables,
  APITypes.OnUpdateFinancialDetailsSubscription
>;
export const onDeleteFinancialDetails = /* GraphQL */ `subscription OnDeleteFinancialDetails(
  $filter: ModelSubscriptionFinancialDetailsFilterInput
) {
  onDeleteFinancialDetails(filter: $filter) {
    id
    organization_id
    revenue
    employees
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFinancialDetailsSubscriptionVariables,
  APITypes.OnDeleteFinancialDetailsSubscription
>;
export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onCreateProfile(filter: $filter) {
    id
    organization_id
    role
    userName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onUpdateProfile(filter: $filter) {
    id
    organization_id
    role
    userName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
  onDeleteProfile(filter: $filter) {
    id
    organization_id
    role
    userName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
