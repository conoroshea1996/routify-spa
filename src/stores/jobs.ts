import {writable} from "svelte/store";

export let jobs = writable([
    {
      id: 34,
      jobId: 34,
      title: "Developer",
      location: "City",
      state: null,
      country: "Canada",
      stateCode: null,
      countryCode: "CA",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Contract",
      status: "Published",
      experience: "Entry Level",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1611045785,
      datePublished: 1611045785,
      orderId: 0,
      totalCandidates: 7,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 2,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 2,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 1,
          },
          {
            statusId: 15,
            name: "Screening 2",
            count: 1,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 3,
        customStatuses: [
          {
            statusId: 12,
            name: "On board",
            count: 1,
          },
        ],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [44, 1],
      followerIds: [1, 44],
      allowedUserIds: [1, 47, 44],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979626,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "40,000",
      remoteOption: "CovidRemote",
      objectID: "34",
      _highlightResult: {
        title: {
          value: "Developer",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "City",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "Canada",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:41",
    },
    {
      id: 33,
      jobId: 33,
      title: "Sample 1",
      location: "cork",
      state: null,
      country: "Ireland",
      stateCode: null,
      countryCode: "GB",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><ul><li>List the primary duties and responsibilities in order of importance</li><li>Begin each statement with an action verb</li><li>Use the present tense of verbs</li><li>Use gender neutral language</li><li>Use generic language</li><li>Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”</li></ul><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Full Time",
      status: "Published",
      experience: "MidLevel",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1610990724,
      datePublished: 1610990724,
      orderId: 0,
      totalCandidates: 36,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 32,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 4,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 4,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 0,
        customStatuses: [],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [46, 44, 48, 1],
      followerIds: [1],
      allowedUserIds: [1, 47, 46, 44, 48],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979740,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "£50,000",
      remoteOption: "NotRemote",
      objectID: "33",
      _highlightResult: {
        title: {
          value: "Sample 1",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "cork",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "United Kingdom",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:42",
    },
    {
      id: 37,
      jobId: 37,
      title: "Developer",
      location: "City",
      state: null,
      country: "Canada",
      stateCode: null,
      countryCode: "CA",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Contract",
      status: "Published",
      experience: "Entry Level",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1611045785,
      datePublished: 1611045785,
      orderId: 0,
      totalCandidates: 7,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 2,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 2,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 1,
          },
          {
            statusId: 15,
            name: "Screening 2",
            count: 1,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 3,
        customStatuses: [
          {
            statusId: 12,
            name: "On board",
            count: 1,
          },
        ],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [44, 1],
      followerIds: [1, 44],
      allowedUserIds: [1, 47, 44],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979626,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "40,000",
      remoteOption: "CovidRemote",
      objectID: "34",
      _highlightResult: {
        title: {
          value: "Developer",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "City",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "Canada",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:41",
    },
    {
      id: 67,
      jobId: 67,
      title: "Sample 1",
      location: "cork",
      state: null,
      country: "Ireland",
      stateCode: null,
      countryCode: "GB",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><ul><li>List the primary duties and responsibilities in order of importance</li><li>Begin each statement with an action verb</li><li>Use the present tense of verbs</li><li>Use gender neutral language</li><li>Use generic language</li><li>Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”</li></ul><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Full Time",
      status: "Drafted",
      experience: "MidLevel",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1610990724,
      datePublished: 1610990724,
      orderId: 0,
      totalCandidates: 36,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 32,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 4,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 4,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 0,
        customStatuses: [],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [46, 44, 48, 1],
      followerIds: [1],
      allowedUserIds: [1, 47, 46, 44, 48],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979740,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "£50,000",
      remoteOption: "NotRemote",
      objectID: "33",
      _highlightResult: {
        title: {
          value: "Sample 1",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "cork",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "United Kingdom",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:42",
    },
    {
      id: 797,
      jobId: 797,
      title: "Developer",
      location: "City",
      state: null,
      country: "Canada",
      stateCode: null,
      countryCode: "CA",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Contract",
      status: "Published",
      experience: "Entry Level",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1611045785,
      datePublished: 1611045785,
      orderId: 0,
      totalCandidates: 7,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 2,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 2,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 1,
          },
          {
            statusId: 15,
            name: "Screening 2",
            count: 1,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 3,
        customStatuses: [
          {
            statusId: 12,
            name: "On board",
            count: 1,
          },
        ],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [44, 1],
      followerIds: [1, 44],
      allowedUserIds: [1, 47, 44],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979626,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "40,000",
      remoteOption: "CovidRemote",
      objectID: "34",
      _highlightResult: {
        title: {
          value: "Developer",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "City",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "Canada",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:41",
    },
    {
      id: 1222,
      jobId: 1222,
      title: "Sample 1",
      location: "cork",
      state: null,
      country: "Ireland",
      stateCode: null,
      countryCode: "GB",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><ul><li>List the primary duties and responsibilities in order of importance</li><li>Begin each statement with an action verb</li><li>Use the present tense of verbs</li><li>Use gender neutral language</li><li>Use generic language</li><li>Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”</li></ul><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Full Time",
      status: "Closed",
      experience: "MidLevel",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1610990724,
      datePublished: 1610990724,
      orderId: 0,
      totalCandidates: 36,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 32,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 4,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 4,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 0,
        customStatuses: [],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [46, 44, 48, 1],
      followerIds: [1],
      allowedUserIds: [1, 47, 46, 44, 48],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979740,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "£50,000",
      remoteOption: "NotRemote",
      objectID: "33",
      _highlightResult: {
        title: {
          value: "Sample 1",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "cork",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "United Kingdom",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:42",
    },
    {
      id: 21,
      jobId: 21,
      title: "Developer",
      location: "City",
      state: null,
      country: "Canada",
      stateCode: null,
      countryCode: "CA",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Contract",
      status: "Published",
      experience: "Entry Level",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1611045785,
      datePublished: 1611045785,
      orderId: 0,
      totalCandidates: 7,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 2,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 2,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 1,
          },
          {
            statusId: 15,
            name: "Screening 2",
            count: 1,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 3,
        customStatuses: [
          {
            statusId: 12,
            name: "On board",
            count: 1,
          },
        ],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [44, 1],
      followerIds: [1, 44],
      allowedUserIds: [1, 47, 44],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979626,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "40,000",
      remoteOption: "CovidRemote",
      objectID: "34",
      _highlightResult: {
        title: {
          value: "Developer",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "City",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "Canada",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:41",
    },
    {
      id: 313,
      jobId: 313,
      title: "Sample 1",
      location: "cork",
      state: null,
      country: "Ireland",
      stateCode: null,
      countryCode: "GB",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><ul><li>List the primary duties and responsibilities in order of importance</li><li>Begin each statement with an action verb</li><li>Use the present tense of verbs</li><li>Use gender neutral language</li><li>Use generic language</li><li>Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”</li></ul><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Full Time",
      status: "Internal",
      experience: "MidLevel",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1610990724,
      datePublished: 1610990724,
      orderId: 0,
      totalCandidates: 36,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 32,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 4,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 4,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 0,
        customStatuses: [],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [46, 44, 48, 1],
      followerIds: [1],
      allowedUserIds: [1, 47, 46, 44, 48],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979740,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "£50,000",
      remoteOption: "NotRemote",
      objectID: "33",
      _highlightResult: {
        title: {
          value: "Sample 1",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "cork",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "United Kingdom",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:42",
    },
  ]) ;


  export const jobNotes = writable([
    {
        "id": 17,
        "dateCreated": "2021-05-28T08:41:54.733",
        "userName": "Test Admin",
        "note": "<span class=\"atwho-inserted\"><span class=\"hint-top highlight-txt\">@new_u</span></span>‍",
        "userId": 1,
        "attachments": [
            {
                "id": 3,
                "fileId": 49,
                "fileName": "issue.png",
                "fileType": "image/png",
                "sizeInKB": 84865
            },
            {
              "id": 5,
              "fileId": 41111,
              "fileName": "questions.png",
              "fileType": "image/png",
              "sizeInKB": 846
          }
        ],
        "jobId": 34,
        "mentions": null,
        "restricted": true
    },
    {
        "id": 18,
        "dateCreated": "2021-05-28T08:42:28.013",
        "userName": "Test Admin",
        "note": "I’d really like to push ahead and try get this roll filled <span class=\"atwho-inserted\"><span class=\"hint-top highlight-txt\">@svelte_d</span></span>‍  can we share this anywhere else and change the questions?",
        "userId": 1,
        "attachments": [],
        "jobId": 34,
        "mentions": null,
        "restricted": false
    },
    {
        "id": 19,
        "dateCreated": "2021-05-28T08:43:23.607",
        "userName": "Test Admin",
        "note": "I’d really like to push ahead and try get this roll filled <span class=\"atwho-inserted\"><span class=\"hint-top highlight-txt\">@Test_A</span></span>‍ can we share this anywhere else and change the questions?",
        "userId": 1,
        "attachments": [
            {
                "id": 4,
                "fileId": 50,
                "fileName": "capture1_23_.PNG",
                "fileType": "image/png",
                "sizeInKB": 27831
            }
        ],
        "jobId": 34,
        "mentions": null,
        "restricted": false
    },
    {
      "id": 17,
      "dateCreated": "2021-05-28T08:41:54.733",
      "userName": "Test Admin",
      "note": "<span class=\"atwho-inserted\"><span class=\"hint-top highlight-txt\">@new_u</span></span>‍",
      "userId": 1,
      "attachments": [
          {
              "id": 3,
              "fileId": 49,
              "fileName": "issue.png",
              "fileType": "image/png",
              "sizeInKB": 84865
          },
          {
            "id": 5,
            "fileId": 41111,
            "fileName": "questions.png",
            "fileType": "image/png",
            "sizeInKB": 846
        }
      ],
      "jobId": 34,
      "mentions": null,
      "restricted": true
  },
  {
    "id": 17,
    "dateCreated": "2021-05-28T08:41:54.733",
    "userName": "Test Admin",
    "note": "<span class=\"atwho-inserted\"><span class=\"hint-top highlight-txt\">@new_u</span></span>‍",
    "userId": 1,
    "attachments": [
        {
            "id": 3,
            "fileId": 49,
            "fileName": "issue.png",
            "fileType": "image/png",
            "sizeInKB": 84865
        },
        {
          "id": 5,
          "fileId": 41111,
          "fileName": "questions.png",
          "fileType": "image/png",
          "sizeInKB": 846
      }
    ],
    "jobId": 34,
    "mentions": null,
    "restricted": true
},
])

export const jobActivities = writable([
  {
      "date": "2021-05-13T00:00:00",
      "activities": [
          {
              "message": "Added &lsquo;new user&rsquo;",
              "date": "2021-05-13T17:38:28.057",
              "type": 23,
              "userId": 0,
              "userName": "Test Admin",
              "jobId": 0,
              "jobTitle": null,
              "$$hashKey": "object:142"
          },
          {
              "message": "Removed &lsquo;Test Test&rsquo;",
              "date": "2021-05-13T15:35:28.12",
              "type": 24,
              "userId": 0,
              "userName": "Test Admin",
              "jobId": 0,
              "jobTitle": null,
              "$$hashKey": "object:143"
          },
          {
              "message": "Removed &lsquo;new user&rsquo;",
              "date": "2021-05-13T15:35:28.113",
              "type": 24,
              "userId": 0,
              "userName": "Test Admin",
              "jobId": 0,
              "jobTitle": null,
              "$$hashKey": "object:144"
          }
      ],
      "formattedDate": "13th May 2021"
  },
  {
      "date": "2021-05-11T00:00:00",
      "activities": [
          {
              "message": "Job Edited",
              "date": "2021-05-11T15:41:57.967",
              "type": 10,
              "userId": 0,
              "userName": "Test Admin",
              "jobId": 0,
              "jobTitle": null,
              "$$hashKey": "object:151"
          }
      ],
      "formattedDate": "11th May 2021"
  },
  {
      "date": "2021-02-24T00:00:00",
      "activities": [
          {
              "message": "Added &lsquo;new user&rsquo;",
              "date": "2021-02-24T15:44:29.063",
              "type": 23, 
              "userId": 0,
              "userName": "New Hire",
              "jobId": 0,
              "jobTitle": null,
              "$$hashKey": "object:154"
          }
      ],
      "formattedDate": "24th February 2021"
  },
  {
      "date": "2021-01-19T00:00:00",
      "activities": [
          {
              "message": "Job Added",
              "date": "2021-01-19T08:43:05.313",
              "type": 1,
              "userId": 0,
              "userName": "Test Admin",
              "jobId": 0,
              "jobTitle": null,
              "$$hashKey": "object:157"
          }
      ],
      "formattedDate": "19th January 2021"
  }
])