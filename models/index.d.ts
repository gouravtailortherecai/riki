import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerCandidate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Candidate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly resume?: string | null;
  readonly skills?: (string | null)[] | null;
  readonly education?: string | null;
  readonly summary?: string | null;
  readonly experience?: number | null;
  readonly linkedin?: string | null;
  readonly Applications?: (Application | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCandidate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Candidate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly resume?: string | null;
  readonly skills?: (string | null)[] | null;
  readonly education?: string | null;
  readonly summary?: string | null;
  readonly experience?: number | null;
  readonly linkedin?: string | null;
  readonly Applications: AsyncCollection<Application>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Candidate = LazyLoading extends LazyLoadingDisabled ? EagerCandidate : LazyCandidate

export declare const Candidate: (new (init: ModelInit<Candidate>) => Candidate) & {
  copyOf(source: Candidate, mutator: (draft: MutableModel<Candidate>) => MutableModel<Candidate> | void): Candidate;
}

type EagerJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly applications?: (Application | null)[] | null;
  readonly ctc?: (number | null)[] | null;
  readonly experience?: (number | null)[] | null;
  readonly jd?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly applications: AsyncCollection<Application>;
  readonly ctc?: (number | null)[] | null;
  readonly experience?: (number | null)[] | null;
  readonly jd?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Job = LazyLoading extends LazyLoadingDisabled ? EagerJob : LazyJob

export declare const Job: (new (init: ModelInit<Job>) => Job) & {
  copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

type EagerApplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Application, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly job_id: string;
  readonly status?: string | null;
  readonly feedbacks?: (Feedback | null)[] | null;
  readonly candidateID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyApplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Application, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly job_id: string;
  readonly status?: string | null;
  readonly feedbacks: AsyncCollection<Feedback>;
  readonly candidateID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Application = LazyLoading extends LazyLoadingDisabled ? EagerApplication : LazyApplication

export declare const Application: (new (init: ModelInit<Application>) => Application) & {
  copyOf(source: Application, mutator: (draft: MutableModel<Application>) => MutableModel<Application> | void): Application;
}

type EagerFeedback = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Feedback, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly application_id: string;
  readonly comment?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyFeedback = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Feedback, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly application_id: string;
  readonly comment?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Feedback = LazyLoading extends LazyLoadingDisabled ? EagerFeedback : LazyFeedback

export declare const Feedback: (new (init: ModelInit<Feedback>) => Feedback) & {
  copyOf(source: Feedback, mutator: (draft: MutableModel<Feedback>) => MutableModel<Feedback> | void): Feedback;
}

type EagerOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly profiles?: (Profile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly profiles: AsyncCollection<Profile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organization = LazyLoading extends LazyLoadingDisabled ? EagerOrganization : LazyOrganization

export declare const Organization: (new (init: ModelInit<Organization>) => Organization) & {
  copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly organization_id: string;
  readonly role?: string | null;
  readonly userName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly organization_id: string;
  readonly role?: string | null;
  readonly userName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}