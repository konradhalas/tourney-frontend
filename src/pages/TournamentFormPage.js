import {Alert, Button, Col, Form, Row} from 'react-bootstrap';
import {useState} from 'react';
import {createTournament} from '../api/tournaments';
import {useNavigate} from 'react-router-dom';

function TournamentFormPage() {
    const [tournament, setTournament] = useState({name: '', slug: ''});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onFormSubmit = (event) => {
        event.preventDefault();
        createTournament(tournament)
            .then(() => navigate('/'))
            .catch((error) => setErrors(error.response.data));
    }
    return <>
        <h1 className="mb-3">Organize Tournament</h1>
        {errors.non_field_error && <Alert variant="danger">
            {errors.non_field_error}
        </Alert>}
        <Form onSubmit={onFormSubmit} noValidate>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control size="lg" type="text" value={tournament.name}
                              onChange={(event) => setTournament({...tournament, name: event.target.value})}
                              isInvalid={!!errors.name}/>
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Slug</Form.Label>
                <Form.Control type="text" value={tournament.slug}
                              onChange={(event) => setTournament({...tournament, slug: event.target.value})}
                              isInvalid={!!errors.slug}/>
                <Form.Control.Feedback type="invalid">{errors.slug}</Form.Control.Feedback>
                <Form.Text>A slug is the part of a URL (a page address) that identifies your tournament.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Organizer</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Address (#1 line)</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Address (#2 line)</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Start date</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>End date</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Board size</Form.Label>
                    <Form.Select>
                        <option>19x19</option>
                        <option>13x13</option>
                        <option>9x9</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Rules</Form.Label>
                    <Form.Select>
                        <option>Japanese</option>
                        <option>Chinese</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Komi</Form.Label>
                    <Form.Control type="number" defaultValue="6.5"/>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label>System</Form.Label>
                <Form.Select>
                    <option>McMahon</option>
                    <option>Swiss</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Number of rounds</Form.Label>
                <Form.Control type="number" defaultValue="5"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Time control</Form.Label>
                <Form.Select>
                    <option>Byo-Yomi</option>
                    <option>Fisher</option>
                </Form.Select>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Main time</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Period time</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Number of periods</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>;
}

export default TournamentFormPage;
