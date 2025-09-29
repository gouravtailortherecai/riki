// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Candidate, Job, Application, Feedback, Organization, Profile } = initSchema(schema);

export {
  Candidate,
  Job,
  Application,
  Feedback,
  Organization,
  Profile
};