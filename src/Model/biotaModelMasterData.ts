// export class BiotaDataModel {
//     biota: Biota;
// }

export class BiotaDataModel {
    public Name?: LanguageModel;
    public JobProfile: LanguageModel;
    Facebook: string;
    Instagram: string;
    Email: string;
    CompanyName: LanguageModel;
    CompanyLink: string="";
    CompanyExperience: string;
    Hobby: LanguageModel;
    PersonalInformation: PersonalInformation;
    Qualification: Qualification;
    FamilyInformation: FamilyInformation;
    ContactMe: ContactMe;
    Photos: Photos;

    constructor() {

    }
}

export class Photos {
    ProfilePhotoName: string;
    GalleryPhoto: GalleryPhoto;
}

export class GalleryPhoto {
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    photo5: string;
    photo6: string;
}

export class PersonalInformation {
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
    english: string="";
    marathi: string="";
}

export class ContactMe {
    EmailId: LanguageModel;
    MobileNo: LanguageModel;
}

export class FamilyInformation {
    GrandfatherName:LanguageModel;
    GrandmotherName:LanguageModel;
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

export class Qualification {
    Education: LanguageModel;
    Job: LanguageModel;
}
