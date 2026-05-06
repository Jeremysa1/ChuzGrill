export default function SectionHeading({ title, subtitle }) {
    return (
        <div className="section-header reveal reveal-up">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}
