export interface CharacterInfo {
    name: string;
    image: string;
    date: any;
    details: RickMap[];
}

export interface RickMap {
    label: string;
    value: string;
}