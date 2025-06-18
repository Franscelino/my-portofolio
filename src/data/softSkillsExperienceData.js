// softSkillsExperienceData.js
// File ini hanya berisi data, tidak ada komponen React atau JSX.
// Icon direpresentasikan sebagai string nama icon.

const softSkillsExperiences = [
    {
        type: 'freshman-leader',
        title: 'Freshman Leader & Partner',
        icon: 'Users', 
        date: 'August 2022 - September 2023', 
        location: 'BINUS University',
        overview: 'Dedicated time to guiding and mentoring incoming university students, assisting them in their transition to academic and campus life. Played a crucial role in fostering a welcoming and supportive environment for new cohorts.',
        achievements: [
            'Successfully onboarded and guided numerous freshmen into university life.',
            'Provided academic and social support, easing their transition.',
            'Developed strong communication, empathy, and mentorship skills.',
            'Contributed significantly to creating a welcoming university environment for new students.'
        ],
        skills: ['Mentorship', 'Communication', 'Empathy', 'Conflict Resolution', 'Student Support', 'Facilitation'],
        impact: 'Improved the integration experience for new students, enhancing their initial university experience and promoting a sense of belonging.',
        lessons: [
            'The importance of active listening and understanding individual student needs.',
            'How to provide constructive feedback and encouragement.',
            'Building a strong, supportive community within the university setting.'
        ],
        photos: [
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Freshman+Orientation', caption: 'Freshman Orientation Session', description: 'Guiding new students through university policies and resources' },
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Mentoring+Session', caption: 'Group Mentoring Session', description: 'Facilitating discussions and problem-solving among freshmen' }
        ]
    },
    {
        type: 'bncc-activist-mc',
        title: 'BNCC Activist: Master of Ceremonies (Study Banding)',
        icon: 'Users', 
        date: 'October 2022', 
        location: 'BINUS University & CCI Telkom',
        overview: 'Served as the Master of Ceremonies for a collaborative study banding event between CCI Telkom and BNCC All Region, facilitating smooth transitions and engaging interactions.',
        achievements: [
            'Successfully hosted collaborative study banding event with CCI Telkom and BNCC All Region.',
            'Ensured professional flow and engagement for a large, diverse audience.',
            'Facilitated inter-regional BNCC collaboration and networking.'
        ],
        skills: ['Public Speaking', 'Event Hosting', 'Facilitation', 'Interpersonal Communication', 'Event Management'],
        impact: 'Contributed to a successful collaborative event, strengthening ties between BNCC regions and external organizations, enhancing the club\'s reputation.',
        lessons: [
            'The importance of clear and concise communication in multi-stakeholder events.',
            'Adapting presentation style and energy to keep diverse audiences engaged.'
        ],
        photos: [
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=MC+Study+Banding', caption: 'Hosting Study Banding Event', description: 'Engaging with participants during the collaborative study banding.' },
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=CCI+Collaboration', caption: 'CCI Telkom & BNCC Collaboration', description: 'Networking session with representatives from CCI Telkom.' }
        ]
    },
    {
        type: 'bncc-activist-pub-os',
        title: 'BNCC Activist: Publication Division Member (Opening Season)',
        icon: 'Camera', 
        date: 'September 2022', 
        location: 'BINUS Computer Club (BNCC)',
        overview: 'Contributed as a member of the Publication Division for BNCC Opening Season, focusing on creating engaging promotional content and enhancing event visibility.',
        achievements: [
            'Contributed to the visual and written content for BNCC Opening Season promotion.',
            'Helped in increasing event awareness and participant registration through creative campaigns.',
            'Collaborated on designing compelling promotional materials for student outreach.'
        ],
        skills: ['Content Creation', 'Digital Marketing', 'Promotional Design', 'Team Collaboration', 'Visual Communication'],
        impact: 'Played a significant role in successfully launching the BNCC Opening Season and attracting a high number of new members, enhancing the club\'s brand image.',
        lessons: [
            'Understanding the target audience for effective promotional campaigns is crucial.',
            'The importance of consistent visual branding and clear messaging in attracting engagement.'
        ],
        photos: [
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=BNCC+Opening+Season', caption: 'BNCC Opening Season Promotions', description: 'Promotional materials developed for the event.' },
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Promo+Design', caption: 'Creative Design Session', description: 'Collaborating on visual assets for event promotion.' }
        ]
    },
    {
        type: 'bncc-activist-techbinar-coord',
        title: 'BNCC Activist: Event Coordinator (Techbinar)',
        icon: 'Lightbulb',
        date: 'November 2022', 
        location: 'BINUS Computer Club (BNCC)',
        overview: 'Coordinated the event division for Techbinar, managing logistics and speaker arrangements for a hybrid event with over 200 participants, both onsite and online.',
        achievements: [
            'Led event division, successfully executing Techbinar with 200+ participants (onsite & online).',
            'Managed end-to-end logistics, including international speaker coordination for a seamless event flow.',
            'Ensured smooth technical execution for both physical and virtual attendees.'
        ],
        skills: ['Event Planning', 'Hybrid Event Management', 'Team Coordination', 'Logistics Management', 'Speaker Relations', 'Problem Solving'],
        impact: 'Contributed significantly to the successful delivery of a major tech seminar, enhancing BNCC\'s reputation and expanding its reach to a wider audience.',
        lessons: [
            'Importance of meticulous planning for hybrid events to ensure a consistent experience for all participants.',
            'Effective task delegation and clear team communication are vital for complex event execution.'
        ],
        photos: [
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Techbinar+Coordination', caption: 'Techbinar Event Coordination', description: 'Overseeing event setup and technical checks.' },
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Virtual+Audience', caption: 'Engaging Online Audience', description: 'Monitoring online participation during Techbinar.' }
        ]
    },
    {
        type: 'bncc-activist-techblast-chair',
        title: 'BNCC Activist: Event Division Head (Techblast)',
        icon: 'Lightbulb', 
        date: 'March 2023', 
        location: 'BINUS Computer Club (BNCC)',
        overview: 'Served as the Head of the Event Division for Techblast, overseeing a large-scale outreach event that successfully engaged over 800 high school students across multiple schools.',
        achievements: [
            'Successfully led Techblast event engaging 800+ high school student participants.',
            'Coordinated multiple school visits and designed interactive sessions tailored for youth engagement.',
            'Managed a large team to ensure smooth event execution across various educational institutions.'
        ],
        skills: ['Large-scale Event Management', 'Team Leadership', 'Youth Engagement', 'Educational Outreach', 'Logistics & Operations'],
        impact: 'Significantly expanded BNCC\'s outreach to high schools, inspiring numerous students to engage with technology and strengthening the club\'s presence in the education sector.',
        lessons: [
            'Strategies for managing large-scale, multi-location events with diverse logistical needs.',
            'Building effective and sustainable partnerships with educational institutions for long-term impact.'
        ],
        photos: [
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Techblast+Event', caption: 'Techblast Event at Schools', description: 'Students participating in Techblast activities.' },
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=School+Engagement', caption: 'Engaging High School Students', description: 'Interactive sessions designed to spark interest in technology.' }
        ]
    },
    {
        type: 'bncc-officer-mentor',
        title: 'BNCC Officer: Mentor (Event Division)',
        icon: 'Award', 
        date: 'September 2023 - Present', 
        location: 'BINUS Computer Club (BNCC)',
        overview: 'Assumed the role of a mentor for activists within the Event Division, guiding them in planning and executing events, including Techbinar with over 500 participants (both onsite and online).',
        achievements: [
            'Mentored a team of activists in organizing large-scale events, leading to successful execution.',
            'Guided the successful execution of Techbinar with 500+ participants (onsite & online).',
            'Fostered skill development and leadership among junior members.',
            'Ensured continuity of high-quality event delivery within the division and upheld BNCC standards.'
        ],
        skills: ['Mentorship', 'Leadership Development', 'Event Oversight', 'Strategic Planning', 'Problem Solving', 'Team Empowerment'],
        impact: 'Empowered a new generation of BNCC event organizers, contributing to the continued success and growth of the organization\'s impactful events and fostering a strong sense of community.',
        lessons: [
            'The art of effective delegation and building trust in team members for greater autonomy.',
            'Cultivating a supportive learning environment is key for budding leaders and their professional growth.',
            'Measuring success extends beyond numbers to include skill development and confidence building in team members.'
        ],
        photos: [
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Mentor+Session', caption: 'Mentoring Session with Activists', description: 'Providing guidance and support to the event division team.' },
            { url: 'https://placehold.co/600x400/1f2937/9ca3af?text=Techbinar+500', caption: 'Techbinar Event (500+ Participants)', description: 'The successful event organized by the mentored team.' },
        ]
    },
];

export default softSkillsExperiences;
