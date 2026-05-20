import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CarouselControls({ previousId, nextId, progressId }) {
    return (
        <div className="carousel-nav">
            <button className="carousel-arrow" id={previousId} type="button" aria-label="Anterior">
                <ChevronLeft />
            </button>
            <div className="carousel-progress-container">
                <div className="carousel-progress-bar" id={progressId}></div>
            </div>
            <button className="carousel-arrow" id={nextId} type="button" aria-label="Siguiente">
                <ChevronRight />
            </button>
        </div>
    );
}
