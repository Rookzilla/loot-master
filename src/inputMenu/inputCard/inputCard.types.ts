interface Creature {
    label: string;
    name?: string;
}

interface FormDataItem {
    creatureName: any;
    creatureType: string;
    challengeRating: string;
    civilian: boolean;
}
export type {
    Creature,
    FormDataItem,
}