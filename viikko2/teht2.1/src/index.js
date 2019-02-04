import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'


const App = () => {
    const courses = [
        {
            name: 'Half Stack -sovelluskehitys',
            id: 1,
            parts: [
                {
                    name: 'Reactin perusteet',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Tiedonvälitys propseilla',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'Komponenttien tila',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Testi',
                    exercises: 154,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 2,
                    id: 1
                },
                {
                    name: 'Middlewaret',
                    exercises: 7,
                    id: 2
                }
            ]
        },
        {
            name: 'Tira',
            id: 3,
            parts: [
                {
                    name: 'Tietorakenteet',
                    exercises: 600,
                    id: 1
                },
                {
                    name: 'Algoritmit',
                    exercises: 100,
                    id: 2
                }
            ]
        }
    ]
    const courseList = () => courses.map(c =>
        <li key={c.id}>
            <div>
                <Course course={c} />
                <br></br><Total course={c} />
            </div>
        </li>
    )
    return (
        <div>
            {courseList()}
        </div>
    )
}

const Total = ({ course }) => {
    const exer = course.parts.map(p => p.exercises);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
        <div>
            <span>
                yhteensä {exer.reduce(reducer)} tehtävää
            </span>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))