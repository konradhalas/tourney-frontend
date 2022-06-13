import {useEffect, useState} from 'react';
import {getTournament} from '../api/tournaments';
import {useParams} from 'react-router-dom';

function TournamentDetailsPage() {
    const [tournament, setTournament] = useState(null);
    let params = useParams();

    useEffect(() => {
        getTournament(params.slug)
            .then((response) => setTournament(response.data));
    }, []);
    return (<>
        {tournament && <h1>{tournament.name}</h1>}
    </>);
}

export default TournamentDetailsPage;
