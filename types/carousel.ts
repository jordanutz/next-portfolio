interface Indicator {
    id: number;
    label: string;
    image: any;
}

export interface CarouselProps {
    active: number;
    setActive: (id: number) => void;
    indicators: Indicator[];
}