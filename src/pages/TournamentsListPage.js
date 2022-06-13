import {Button, Card} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {getTournaments} from '../api/tournaments';

function TournamentsListPage() {
    const [tournaments, setTournaments] = useState([]);
    useEffect(() => {
        getTournaments()
            .then((response) => setTournaments(response.data));
    }, []);
    return (<>
        <div className="mb-3 d-flex justify-content-between align-items-baseline">
            <h1>Tournaments</h1>
            <Button href="/tournaments/create">Orgnize</Button>
        </div>
        {tournaments.map((tournament) => <Card key={tournament.slug} className="mb-3">
            <Card.Body>
                <Card.Title>
                    <a href={`/tournaments/${tournament.slug}`} className="stretched-link">{tournament.name}</a>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">25-26 czerwca 2022</Card.Subtitle>
                <Card.Text>
                    Turniej Warszawski powraca po dwurocznej przerwie do kalendarza polskich wydarzeń goistycznych.
                    W tym roku powiązany będzie z eliminacjami do Ligi Mistrzostw Polski 2022.
                </Card.Text>
            </Card.Body>
        </Card>)}
    </>);
}

export default TournamentsListPage;
