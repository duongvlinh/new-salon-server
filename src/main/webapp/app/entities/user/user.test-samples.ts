import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12371,
  login: 'nPd',
};

export const sampleWithPartialData: IUser = {
  id: 26269,
  login: '3vYxTH@bKx\\D8\\7L2Ry\\@6\\:KKI\\y19c',
};

export const sampleWithFullData: IUser = {
  id: 8061,
  login: '5b',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
