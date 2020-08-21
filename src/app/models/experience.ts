import { Technologies } from './technologies';

export interface Experience {
    enterprise: string;
    location: string;
    position: string;
    fromDate: Date;
    toDate: Date;
    description: string;
    frontEndTechnologies: Technologies[]
    backEndTechnologies: Technologies[]
}