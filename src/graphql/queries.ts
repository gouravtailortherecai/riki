/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCandidate = /* GraphQL */ `query GetCandidate($id: ID!) {
  getCandidate(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCandidateQueryVariables,
  APITypes.GetCandidateQuery
>;
export const listCandidates = /* GraphQL */ `query ListCandidates(
  $filter: ModelCandidateFilterInput
  $limit: Int
  $nextToken: String
) {
  listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCandidatesQueryVariables,
  APITypes.ListCandidatesQuery
>;
export const getWorkExperience = /* GraphQL */ `query GetWorkExperience($id: ID!) {
  getWorkExperience(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetWorkExperienceQueryVariables,
  APITypes.GetWorkExperienceQuery
>;
export const listWorkExperiences = /* GraphQL */ `query ListWorkExperiences(
  $filter: ModelWorkExperienceFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListWorkExperiencesQueryVariables,
  APITypes.ListWorkExperiencesQuery
>;
export const getEducation = /* GraphQL */ `query GetEducation($id: ID!) {
  getEducation(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEducationQueryVariables,
  APITypes.GetEducationQuery
>;
export const listEducations = /* GraphQL */ `query ListEducations(
  $filter: ModelEducationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListEducationsQueryVariables,
  APITypes.ListEducationsQuery
>;
export const getCertification = /* GraphQL */ `query GetCertification($id: ID!) {
  getCertification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCertificationQueryVariables,
  APITypes.GetCertificationQuery
>;
export const listCertifications = /* GraphQL */ `query ListCertifications(
  $filter: ModelCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListCertificationsQueryVariables,
  APITypes.ListCertificationsQuery
>;
export const getJob = /* GraphQL */ `query GetJob($id: ID!) {
  getJob(id: $id) {
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
` as GeneratedQuery<APITypes.GetJobQueryVariables, APITypes.GetJobQuery>;
export const listJobs = /* GraphQL */ `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListJobsQueryVariables, APITypes.ListJobsQuery>;
export const getApplication = /* GraphQL */ `query GetApplication($id: ID!) {
  getApplication(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetApplicationQueryVariables,
  APITypes.GetApplicationQuery
>;
export const listApplications = /* GraphQL */ `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListApplicationsQueryVariables,
  APITypes.ListApplicationsQuery
>;
export const getFeedback = /* GraphQL */ `query GetFeedback($id: ID!) {
  getFeedback(id: $id) {
    id
    application_id
    comment
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeedbackQueryVariables,
  APITypes.GetFeedbackQuery
>;
export const listFeedbacks = /* GraphQL */ `query ListFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListFeedbacksQueryVariables,
  APITypes.ListFeedbacksQuery
>;
export const getOrganization = /* GraphQL */ `query GetOrganization($id: ID!) {
  getOrganization(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOrganizationQueryVariables,
  APITypes.GetOrganizationQuery
>;
export const listOrganizations = /* GraphQL */ `query ListOrganizations(
  $filter: ModelOrganizationFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrganizationsQueryVariables,
  APITypes.ListOrganizationsQuery
>;
export const getFinancialDetails = /* GraphQL */ `query GetFinancialDetails($id: ID!) {
  getFinancialDetails(id: $id) {
    id
    organization_id
    revenue
    employees
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFinancialDetailsQueryVariables,
  APITypes.GetFinancialDetailsQuery
>;
export const listFinancialDetails = /* GraphQL */ `query ListFinancialDetails(
  $filter: ModelFinancialDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFinancialDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListFinancialDetailsQueryVariables,
  APITypes.ListFinancialDetailsQuery
>;
export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    organization_id
    role
    userName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const workExperiencesByCandidate_id = /* GraphQL */ `query WorkExperiencesByCandidate_id(
  $candidate_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelWorkExperienceFilterInput
  $limit: Int
  $nextToken: String
) {
  workExperiencesByCandidate_id(
    candidate_id: $candidate_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.WorkExperiencesByCandidate_idQueryVariables,
  APITypes.WorkExperiencesByCandidate_idQuery
>;
export const educationsByCandidate_id = /* GraphQL */ `query EducationsByCandidate_id(
  $candidate_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEducationFilterInput
  $limit: Int
  $nextToken: String
) {
  educationsByCandidate_id(
    candidate_id: $candidate_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.EducationsByCandidate_idQueryVariables,
  APITypes.EducationsByCandidate_idQuery
>;
export const certificationsByCandidate_id = /* GraphQL */ `query CertificationsByCandidate_id(
  $candidate_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  certificationsByCandidate_id(
    candidate_id: $candidate_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.CertificationsByCandidate_idQueryVariables,
  APITypes.CertificationsByCandidate_idQuery
>;
export const applicationsByCandidate_id = /* GraphQL */ `query ApplicationsByCandidate_id(
  $candidate_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByCandidate_id(
    candidate_id: $candidate_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ApplicationsByCandidate_idQueryVariables,
  APITypes.ApplicationsByCandidate_idQuery
>;
export const applicationsByJob_id = /* GraphQL */ `query ApplicationsByJob_id(
  $job_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByJob_id(
    job_id: $job_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ApplicationsByJob_idQueryVariables,
  APITypes.ApplicationsByJob_idQuery
>;
export const feedbacksByApplication_idAndCreatedAt = /* GraphQL */ `query FeedbacksByApplication_idAndCreatedAt(
  $application_id: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  feedbacksByApplication_idAndCreatedAt(
    application_id: $application_id
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.FeedbacksByApplication_idAndCreatedAtQueryVariables,
  APITypes.FeedbacksByApplication_idAndCreatedAtQuery
>;
export const financialDetailsByOrganization_id = /* GraphQL */ `query FinancialDetailsByOrganization_id(
  $organization_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFinancialDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  financialDetailsByOrganization_id(
    organization_id: $organization_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.FinancialDetailsByOrganization_idQueryVariables,
  APITypes.FinancialDetailsByOrganization_idQuery
>;
export const profilesByOrganization_id = /* GraphQL */ `query ProfilesByOrganization_id(
  $organization_id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  profilesByOrganization_id(
    organization_id: $organization_id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ProfilesByOrganization_idQueryVariables,
  APITypes.ProfilesByOrganization_idQuery
>;
