import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '05f16fd2-423c-47d9-ab45-04848160b8b6',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a81010fd-16da-4787-9859-72c5c76f1aa3',
};

export const sampleWithFullData: IAuthority = {
  name: 'b99e2c7e-e5b8-463f-80fd-1ad4ac5e3b7c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
