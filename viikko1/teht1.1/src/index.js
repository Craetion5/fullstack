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
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
          <Header course={course} />
          <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
          <Total teht={exercises1+exercises2+exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))