import Link from 'next/link';

function EventItem(props) {
    const { title, image, data, location, id } = props;

    const humarReadableDate = new Date(data).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/event/${id}`;

    return <li>
        <img src={"/" + image} alt={title} />
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{humarReadableDate}</time>
                </div>
                <div>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div>
                <Link href={exploreLink}> Explore Event</Link>
            </div>
        </div>
    </li>;
}

export default EventItem;