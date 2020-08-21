import { Experience } from '../models/experience';

export const experiencesData: Experience[] = [
    {
        enterprise: 'Advensys',
        location: 'Wavre',
        position: '.NET developer',
        fromDate: new Date(2017, 2, 1),
        toDate: new Date(),
        description: 'Business analysis. Creation of extensions and libraries, improvement of applications and maintenance. Technical support.',
        frontEndTechnologies: [
            {
                name: 'WinForms'
            },
            {
                name: 'Razor'
            },
            {
                name: 'Angular'
            }
        ],
        backEndTechnologies: [
            {
                name: '.NET'
            },
            {
                name: '.NET MVC'
            },
            {
                name: '.NET Core (Web API)'
            }
        ]
    }
]