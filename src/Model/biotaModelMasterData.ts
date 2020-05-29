// export class BiotaDataModel {
//     biota: Biota;
// }

export class BiotaDataModel {
    Name: LanguageModel;
    public JobProfile: LanguageModel;
    Facebook: string;
    Instagram: string;
    Email: string;
    CompanyName: LanguageModel;
    Hobby: LanguageModel;
    PersonalInformation: PersonalInformation;
    Qualification: Qualification;
    FamilyInformation: FamilyInformation;
    ContactMe: ContactMe;
    Photos:Photos;
}

export interface Photos {
    ProfilePhotoName:string;
    GalleryPhoto:Photos;
}

export interface Photos {
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    photo5: string;
    photo6: string;

}

export interface PersonalInformation {
    Name: LanguageModel;
    DateOfBirth: LanguageModel;
    BirthPlace: LanguageModel;
    BirthTime: LanguageModel;
    Colour: LanguageModel;
    Height: LanguageModel;
    BloodGroup: LanguageModel;
    Gotra: LanguageModel;
    Ras: LanguageModel;
    Kuldaivat: LanguageModel;
    RasName: LanguageModel;
    Cast: LanguageModel;
}

export class LanguageModel {
    english: string;
    marathi: string;
}

export interface ContactMe {
    EmailId: LanguageModel;
    MobileNo: LanguageModel;
}

export interface FamilyInformation {
    FatherName: LanguageModel;
    MotherName: LanguageModel;
    SisterName: LanguageModel;
    BrotherName: LanguageModel;
    Uncle: LanguageModel;
    Mama: LanguageModel;
    Aatya: LanguageModel;
    Mavshi: LanguageModel;
    Relatives: LanguageModel;
}

export interface Qualification {
    Education: LanguageModel;
    Job: LanguageModel;
}
