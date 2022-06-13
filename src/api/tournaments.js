import api from './config';

export function getTournament(slug) {
    return api.get(`/tournaments/${slug}`);
}

export function getTournaments() {
    return api.get('/tournaments');
}

export function createTournament(data) {
    return api.post('/tournaments', data);
}
