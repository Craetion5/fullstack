import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>
      <div>
        <p>
          {props.course}
        </p>
      </div>
      </h1>
    )
  }

  const Content = (props) => {
    return (
      <div>
          <p>
                <Part part={props.part1} exercises={props.exercises1}/>
                <Part part={props.part2} exercises={props.exercises2} />
                <Part part={props.part3} exercises={props.exercises3} />
            </p>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
          <p>
                {props.part} {props.exercises}
            </p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
          <p>
                yhteensä {props.teht} tehtävää
            </p>
      </div>
    )
  }

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
          <Header course={course.name} />
          <Content part1={course.parts[0].name} part2={course.parts[1].name} part3={course.parts[2].name} exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
          <Total teht={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))