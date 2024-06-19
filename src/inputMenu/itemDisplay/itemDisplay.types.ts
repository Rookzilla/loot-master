interface Item {
    name: string;
    category: string;
    cost_real: number;
}

interface ChallengeRating {
    name: string;
    reward: number;
}

export type {
    Item,
    ChallengeRating,
}